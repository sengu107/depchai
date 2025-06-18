const lunarCalendar = {
    FIRST_DAY: new Date(1900, 0, 31),
    monthDays: [
        0x1bf, 0x1ab5, 0x16b3, 0x16b5, 0x1a95, 0x1a97, 0x1a93, 0x1a95, 0x1695, 0x1697,
        0x1593, 0x1595, 0x1595, 0x1597, 0x1493, 0x1495, 0x1495, 0x1497, 0x1393, 0x1395
    ],

    lunarDay(dd, mm, yy) {
        const ly = yy - 1900;
        const lm = mm - 1;
        const diff = Math.floor((new Date(yy, lm, dd) - this.FIRST_DAY) / 86400000);
        
        let i;
        for(i = 0; i < this.monthDays.length; i++) {
            if(diff <= this.monthDays[i]) break;
        }
        
        const lunarYear = 1900 + i;
        const diffFromLunarNewYear = diff - (i > 0 ? this.monthDays[i-1] : 0);
        
        let lunarMonth = 1;
        let lunarDay = diffFromLunarNewYear + 1;
        
        // Điều chỉnh tháng và ngày
        for(let j = 0; j < 13; j++) {
            const monthLength = ((j % 2) === 0) ? 29 : 30;
            if(lunarDay > monthLength) {
                lunarDay -= monthLength;
                lunarMonth++;
            } else {
                break;
            }
        }
        
        return {
            day: lunarDay,
            month: lunarMonth,
            year: lunarYear
        };
    },
    
    monthName(month) {
        const months = ['Giêng', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười', 'Một', 'Chạp'];
        return months[month - 1] || '';
    },

    formatLunar(date) {
        const d = date.getDate();
        const m = date.getMonth() + 1;
        const y = date.getFullYear();
        const lunar = this.lunarDay(d, m, y);
        return `Mùng ${lunar.day} tháng ${this.monthName(lunar.month)}`;
    }
};
        var dr = Math.PI / 180;
        var Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
        Jd1 = Jd1 + 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr);
        var M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
        var Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
        var F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;
        var C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M);
        C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
        C1 = C1 - 0.0004 * Math.sin(dr * 3 * Mpr);
        C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
        C1 = C1 - 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M));
        C1 = C1 - 0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr));
        C1 = C1 + 0.0010 * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (2 * Mpr + M));
        var deltat = 0;
        if (yy < 1000) {
            deltat = 0;
        } else if (yy < 1600) {
            deltat = 2;
        } else if (yy < 1800) {
            deltat = 3;
        } else if (yy < 1860) {
            deltat = 7;
        } else if (yy < 1900) {
            deltat = 8;
        } else if (yy < 1920) {
            deltat = 9;
        } else if (yy < 1941) {
            deltat = 10;
        } else if (yy < 1961) {
            deltat = 12;
        } else if (yy < 1986) {
            deltat = 13;
        } else if (yy < 2005) {
            deltat = 14;
        } else if (yy < 2050) {
            deltat = 15;
        } else {
            deltat = 16;
        }
        var JdNew = Jd1 + C1 - deltat;
        return Math.floor(JdNew + 0.5 + timeZone / 24);
    },

    formatLunar(date) {
        const [lunarDay, lunarMonth] = this.convertSolar2Lunar(
            date.getDate(),
            date.getMonth() + 1,
            date.getFullYear()
        );
        return `Mùng ${lunarDay} tháng ${LUNAR_MONTHS[lunarMonth]}`;
    }
};
