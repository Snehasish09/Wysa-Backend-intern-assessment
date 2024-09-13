const { calculateSleepScore } = require('../../services/user');

describe('User Service - calculateSleepScore', () => {

    it('should give the highest score when all sleep criteria are ideal', () => {
        const user = {
            sleepBedTime: "22:00",
            sleepWakeUpTime: "06:00",
            sleepHours: 8,
            sleepChanges: ["fallAsleep", "sleepThroughNight", "wakeUpRefreshed"],
            sleepStruggleDuration: "Less than 2 weeks",
        };

        const score = calculateSleepScore(user);
        expect(score).toBe(95);
    });

    it('should decrease the score based on lower sleep hours', () => {
        const user = {
            sleepBedTime: "23:00",
            sleepWakeUpTime: "06:00",
            sleepHours: 6,
            sleepChanges: ["fallAsleep", "wakeUpRefreshed"],
            sleepStruggleDuration: "2 to 8 weeks",
        };

        const score = calculateSleepScore(user);
        expect(score).toBe(60);
    });


    it('should give the minimum score for minimal sleep hours and longest struggle duration', () => {
        const user = {
            sleepBedTime: "01:00",
            sleepWakeUpTime: "05:00",
            sleepHours: 4,
            sleepChanges: [],
            sleepStruggleDuration: "More than 8 weeks",
        };

        const score = calculateSleepScore(user);
        expect(score).toBe(0);
    });

    it('should not penalize if there are no sleep struggles', () => {
        const user = {
            sleepBedTime: "21:30",
            sleepWakeUpTime: "05:30",
            sleepHours: 8,
            sleepChanges: ["fallAsleep"],
            sleepStruggleDuration: "Less than 2 weeks",
        };

        const score = calculateSleepScore(user);
        expect(score).toBe(55);
    });

    it('should calculate score correctly with mixed sleep changes and struggle duration', () => {
        const user = {
            sleepBedTime: "23:00",
            sleepWakeUpTime: "07:00",
            sleepHours: 7,
            sleepChanges: ["fallAsleep", "wakeUpRefreshed"],
            sleepStruggleDuration: "More than 8 weeks",
        };

        const score = calculateSleepScore(user);
        expect(score).toBe(60);
    });

    it('should handle the case where there are no sleep changes', () => {
        const user = {
            sleepBedTime: "22:00",
            sleepWakeUpTime: "05:00",
            sleepHours: 7,
            sleepChanges: [],
            sleepStruggleDuration: "Less than 2 weeks",
        };

        const score = calculateSleepScore(user);
        expect(score).toBe(35);
    });

    it('should decrease the score based on lower sleep hours', () => {
        const user = {
            sleepBedTime: "23:00",
            sleepWakeUpTime: "06:00",
            sleepHours: 6,
            sleepChanges: ["fallAsleep", "wakeUpRefreshed"],
            sleepStruggleDuration: "2 to 8 weeks",
        };

        const score = calculateSleepScore(user);
        expect(score).toBe(60);
    });


});
