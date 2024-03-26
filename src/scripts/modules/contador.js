const eventDate = new Date('Dec 18, 2024 10:00:00');
const eventTimeStamp = eventDate.getTime();

export const counter = setInterval(() => {
    const sysDate = new Date()
    const sysDateTimeStamp = sysDate.getTime()

    const remeaningTime = eventTimeStamp - sysDateTimeStamp

    if (remeaningTime <= 0) {
        clearInterval(counter)
        document.getElementById('contador').innerHTML = `agora !`
    } else {
        const daysRemeaningTime = Math.floor(remeaningTime / (1000 * 3600 * 24))
        const hoursRemeaningTime = Math.floor((remeaningTime % (1000 * 3600 * 24)) / (1000 * 3600))
        const minutesRemeaningTime = Math.floor((remeaningTime % (1000 * 3600)) / (1000 * 60))
        const secondsRemeaningTime = Math.floor((remeaningTime % (1000 * 60)) / (1000))
    
        document.getElementById('contador').innerHTML = `em ${daysRemeaningTime}d ${hoursRemeaningTime}h ${minutesRemeaningTime}m ${secondsRemeaningTime}s`
    }
}, 1000)