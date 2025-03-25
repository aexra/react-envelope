import { useEffect, useRef, useState } from 'react';

type StopwatchHandler = (time: number) => void;
type IntervalHandler = {
    callback: StopwatchHandler;
    interval: number;
};

export const useStopwatch = (options?: {
    autostart?: boolean;
    initialTime?: number;
    intervalHandlers?: IntervalHandler[];
}) => {
    const [time, setTime] = useState(options?.initialTime || 0);
    const [isRunning, setIsRunning] = useState(options?.autostart || false);
    const intervalIdRef = useRef<ReturnType<typeof setInterval>>(null);
    const handlersRef = useRef<IntervalHandler[]>(options?.intervalHandlers || []);
    const lastHandledTimesRef = useRef<Record<number, number>>({});

    // Обновляем обработчики при изменении
    useEffect(() => {
        handlersRef.current = options?.intervalHandlers || [];
        // Сбрасываем время последних вызовов при изменении обработчиков
        lastHandledTimesRef.current = {};
    }, [options?.intervalHandlers]);

    useEffect(() => {
        if (!isRunning) {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
            return;
        }

        const startTime = Date.now() - time;
        
        intervalIdRef.current = setInterval(() => {
            const currentTime = Date.now() - startTime;
            setTime(currentTime);

            // Вызываем обработчики с интервалами
            handlersRef.current.forEach(handler => {
                const lastHandledTime = lastHandledTimesRef.current[handler.interval] || 0;
                if (currentTime - lastHandledTime >= handler.interval) {
                    handler.callback(currentTime);
                    lastHandledTimesRef.current[handler.interval] = currentTime;
                }
            });
        }, 16); // ~60 FPS для плавного обновления

        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        };
    }, [isRunning, time]);

    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
        }
    };

    const stop = () => {
        setIsRunning(false);
    };

    const reset = (newTime = 0) => {
        setTime(newTime);
        lastHandledTimesRef.current = {};
    };

    const toggle = () => {
        setIsRunning(prev => !prev);
    };

    return {
        time,
        isRunning,
        start,
        stop,
        reset,
        toggle,
        // Для удобства можно добавить форматированное время
        formatted: formatTime(time),
        formatter: formatTime
    };
};

// Вспомогательная функция для форматирования времени
const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);

    return {
        minutes,
        seconds,
        milliseconds,
        toString: () => 
            `${minutes.toString().padStart(2, '0')}:` +
            `${seconds.toString().padStart(2, '0')}.` +
            `${milliseconds.toString().padStart(2, '0')}`
    };
};