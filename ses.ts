enum HavaSesi {
    //% block="hava iyi"
    Iyi = 1,
    //% block="hava kötü"
    Kotu = 2,
    //% block="hava temiz"
    Temiz = 0
}

//% weight=100 color=#2E9E6B icon="\uf028" block="Hava Sesi"
namespace havaSesi {

    /**
     * Seçilen hava sesini çalar
     */
    //% block="çal %ses"
    //% blockId=havasesi_cal
    export function cal(ses: HavaSesi): void {
        if (ses == HavaSesi.Iyi) iyiCal()
        else if (ses == HavaSesi.Kotu) kotuCal()
        else temizCal()
    }

    /**
     * Hava iyi sesini çalar
     */
    //% block="çal hava iyi"
    //% blockId=havasesi_iyi
    export function havaIyi(): void {
        iyiCal()
    }

    /**
     * Hava kötü sesini çalar
     */
    //% block="çal hava kötü"
    //% blockId=havasesi_kotu
    export function havaKotu(): void {
        kotuCal()
    }

    /**
     * Hava temiz sesini çalar
     */
    //% block="çal hava temiz"
    //% blockId=havasesi_temiz
    export function havaTemiz(): void {
        temizCal()
    }
}
