import { reactive } from 'vue'

export const adminState = reactive({
  isAdmin: false
})

export const unlockCount = reactive({
  value: 0
})

export const permaKey = reactive({
  value: "QVNXT1JEV0lFTERTTk9TVFJFTkdUSFVOTEVTU1RIRUhBTkRUSEFUSE9MRFNJVEhBU0NPVVJBR0U="
})

export const timer = reactive({
  running: false,
  seconds: 10 * 60,
  interval: null
})

export interface Key {
  reveal: string;
  value: string;
}

export const Keys = [
    {
        reveal: "U09DQ0VS",
        value: "ejFlaHZwZTkw"
    },
    {
        reveal: "Rk9PVEJBTEw=",
        value: "azE3NXIwNDMy"
    },
    {
        reveal: "Q1JJQ0tFVA==",
        value: "aXEzZHQyZXJo"
    },
    {
        reveal: "VEVOTklT",
        value: "dmwzc2VtcDdp"
    },
    {
        reveal: "QkFTRUJBTEw=",
        value: "dWgycWxkM3hw"
    },
    {
        reveal: "R09MRg==",
        value: "dWJiOXAzZm82"
    },
    {
        reveal: "QkFTS0VUQkFMTA==",
        value: "dnphb2ppazdt"
    },
    {
        reveal: "Q09NUEVUSVRJVkU=",
        value: "Z2l4bnFhaDQ2"
    },
    {
        reveal: "QkVBUg==",
        value: "MDM4MGYyazE4"
    },
    {
        reveal: "Q0FNRUw=",
        value: "YWh3YjVkc2R5"
    },
    {
        reveal: "RE9OS0VZ",
        value: "Nmh4NmR1dGdh"
    },
    {
        reveal: "UkFCQklU",
        value: "emx4bnczemUw"
    },
    {
        reveal: "WkVCUkE=",
        value: "NzAzeG5kZGZk"
    },
    {
        reveal: "RE9H",
        value: "c3gxc2ljMzV5"
    },
    {
        reveal: "REVFUg==",
        value: "dG96OHhzbjVs"
    },
    {
        reveal: "Rk9Y",
        value: "aWwyZmdtNmlq"
    },
    {
        reveal: "UElH",
        value: "NGYwZHZlOGsz"
    },
    {
        reveal: "SE9SU0U=",
        value: "dmx3MHFxa3Zn"
    },
    {
        reveal: "Q0hFRVRBSA==",
        value: "azhrNngwcWtx"
    },
    {
        reveal: "RUxFUEhBTlQ=",
        value: "aGM1MDEycnRp"
    },
    {
        reveal: "R0lSQUZGRQ==",
        value: "OTIydWU0b2Fr"
    },
    {
        reveal: "Q09X",
        value: "YmswOHM1amdp"
    },
    {
        reveal: "R09BVA==",
        value: "dWdia2dpenI5"
    },
    {
        reveal: "RE9OS0VZ",
        value: "bmVtem56dW92"
    },
    {
        reveal: "VElHRVI=",
        value: "b2g3b2p5dHBy"
    },
    {
        reveal: "TElPTg==",
        value: "OXdscG1uN2xs"
    },
    {
        reveal: "TEVPUEFSRA==",
        value: "NzhteG96bXVr"
    },
    {
        reveal: "Q1JPQ09ESUxF",
        value: "cHZjcDNkMGps"
    },
    {
        reveal: "RklTSA==",
        value: "amlrdW9oaGg3"
    },
    {
        reveal: "RE9MUEhJTg==",
        value: "cnl4MnJ4cmlt"
    },
    {
        reveal: "V0hBTEU=",
        value: "NGQ5dnQ1ZjQx"
    },
    {
        reveal: "V09MRg==",
        value: "enM4YTd1cXVp"
    },
    {
        reveal: "QkFU",
        value: "ZXFoMm03Mml5"
    },
    {
        reveal: "SEFNU1RFUg==",
        value: "enVuMnFpemdr"
    },
    {
        reveal: "RkxBTUlOR08=",
        value: "eGplbzFuZXhy"
    },
    {
        reveal: "RFVDSw==",
        value: "d29pcmNkdm1z"
    },
    {
        reveal: "UkFDT09O",
        value: "ajBwc245d3ls"
    },
    {
        reveal: "TUFNTU9USA==",
        value: "ZGpqOHQ1ZnZ1"
    },
    {
        reveal: "U05BS0U=",
        value: "bnloajVjaGY1"
    },
    {
        reveal: "TFlOWA==",
        value: "dGNnNm1zb3Vw"
    },
    {
        reveal: "SkFWQVNDUklQVA==",
        value: "c3B5bXg2MnM1"
    },
    {
        reveal: "UFlUSE9O",
        value: "c3FmM3dhb3o1"
    },
    {
        reveal: "S09UTElO",
        value: "MTg1cjg0OHhv"
    },
    {
        reveal: "UEhQ",
        value: "NjF1ZWlnZm41"
    },
    {
        reveal: "U1dJRlQ=",
        value: "d3c3OTFocjJi"
    },
    {
        reveal: "UlVCWQ==",
        value: "bHV6bG95d21r"
    },
    {
        reveal: "TUFUTEFC",
        value: "M2dnNmo1YnYy"
    },
    {
        reveal: "VFlQRVNDUklQVA==",
        value: "ajVxcmt0czA4"
    },
    {
        reveal: "U1FM",
        value: "OGhldjR1a2E2"
    },
    {
        reveal: "SFRNTA==",
        value: "cG92bWQxOHFw"
    },
    {
        reveal: "UlVTVA==",
        value: "cXdiNXVhY3Nm"
    },
    {
        reveal: "UEVSTA==",
        value: "bGtzNWRzcnl1"
    },
    {
        reveal: "U1dJVENI",
        value: "N3hzcnp6bTRx"
    },
    {
        reveal: "R0FNRUNVQkU=",
        value: "YWEzOHc1ZHJ0"
    },
    {
        reveal: "R0FNRUJPWQ==",
        value: "enF6YXdrMjdw"
    },
    {
        reveal: "Q0hJTkE=",
        value: "YXNkMHM5MnV1"
    },
    {
        reveal: "SU5ESUE=",
        value: "am9xbHd2c2Rq"
    },
    {
        reveal: "SU5ET05FU0lB",
        value: "dmdsYzJiOWll"
    },
    {
        reveal: "UEFLSVNUQU4=",
        value: "NzJlYjkxYnVv"
    },
    {
        reveal: "TklHRVJJQQ==",
        value: "NG51bnVzYTRn"
    },
    {
        reveal: "QlJBWklM",
        value: "dmlhaWMwYXhq"
    },
    {
        reveal: "TUVYSUNP",
        value: "bzEya2E0MGZh"
    },
    {
        reveal: "SkFQQU4=",
        value: "emlkMGlxYWwx"
    },
    {
        reveal: "RUdZUFQ=",
        value: "ZGR5cTdkdWow"
    },
    {
        reveal: "VklFVE5BTQ==",
        value: "Y2VwY2pob3pz"
    },
    {
        reveal: "VFVSS0VZ",
        value: "NGt4eHZuMDkw"
    },
    {
        reveal: "R0VSTUFOWQ==",
        value: "aDltY3VnZjU1"
    },
    {
        reveal: "SVRBTFk=",
        value: "a3BtYnBla3pz"
    },
    {
        reveal: "Q09MT01CSUE=",
        value: "NjdndWNkOHYw"
    },
    {
        reveal: "U1BBSU4=",
        value: "NmgweWtueTA1"
    },
    {
        reveal: "S0VOWUE=",
        value: "MTI3Zzl1bHp0"
    },
    {
        reveal: "QVJHRU5USU5B",
        value: "bW9wc2ZmdG1j"
    },
    {
        reveal: "U1VEQU4=",
        value: "c28xMDZibW56"
    },
    {
        reveal: "VUdBTkRB",
        value: "emcwdXRpampk"
    },
    {
        reveal: "SVJBUQ==",
        value: "MGRscGNwcmxs"
    },
    {
        reveal: "VUtSQUlORQ==",
        value: "aDgzYm1zc2Jm"
    },
    {
        reveal: "Q0FOQURB",
        value: "bHEzbGZjbng4"
    },
    {
        reveal: "UE9MQU5E",
        value: "cHBxc2xlajNu"
    },
    {
        reveal: "WUVNRU4=",
        value: "ZmMyazRzMW83"
    },
    {
        reveal: "QVVTVFJBTElB",
        value: "Z2phNTk3MDFz"
    },
    {
        reveal: "Q0hJTEU=",
        value: "djYycmJjZnQ5"
    },
    {
        reveal: "Uk9NQU5JQQ==",
        value: "engwb3pzYnV5"
    },
    {
        reveal: "RU1PSkk=",
        value: "eTdsNGplZWZk"
    },
    {
        reveal: "UEhPTkU=",
        value: "ajUzb2JuNGti"
    },
    {
        reveal: "Q09NUFVURVI=",
        value: "ZGhkbng5aW5x"
    },
    {
        reveal: "S0VZQk9BUkQ=",
        value: "ZGUxcjgwY3p2"
    },
    {
        reveal: "TU9VU0U=",
        value: "ejUwaTU2c3Fs"
    },
    {
        reveal: "U0NSRUVO",
        value: "dGoxNXIzZ3lx"
    },
    {
        reveal: "U09GVFdBUkU=",
        value: "anBtMGp5bGR5"
    },
    {
        reveal: "SEFSRFdBUkU=",
        value: "OXJ4cWNsNm9s"
    },
    {
        reveal: "UFJJQ0U=",
        value: "dXQ5M3lsaG1q"
    },
    {
        reveal: "UkVTT0xVVElPTg==",
        value: "NmljOG4yZXFm"
    },
    {
        reveal: "RkVBVFVSRVM=",
        value: "ZGs4OGtwNjJj"
    },
    {
        reveal: "TkVUV09SSw==",
        value: "MHJoMXBoeXYx"
    },
    {
        reveal: "U1VQUE9SVA==",
        value: "bmp2dWNzMHFj"
    },
    {
        reveal: "U0VDVVJJVFk=",
        value: "am9venluMW9j"
    },
    {
        reveal: "Q0xPVUQ=",
        value: "OWJxb3RmODlt"
    },
    {
        reveal: "RFlOQU1JQw==",
        value: "d2xqMGtwYjVt"
    },
    {
        reveal: "REVWRUxPUEVS",
        value: "Y29pdXdxNjNu"
    },
    {
        reveal: "U0hPUFBJTkc=",
        value: "YnRtOG51MGxk"
    },
    {
        reveal: "R09PR0xF",
        value: "MmZ2eGhzemUx"
    },
    {
        reveal: "WU9VVFVCRQ==",
        value: "M2NmZm0zMGVz"
    },
    {
        reveal: "VFdJVFRFUg==",
        value: "bmkycGpxdm5k"
    },
    {
        reveal: "SU5TVEFHUkFN",
        value: "cmk3enFxN3Jj"
    },
    {
        reveal: "QkFJRFU=",
        value: "NzVxNDVrYTk3"
    },
    {
        reveal: "V0lLSVBFRElB",
        value: "MWVheTc3YXBk"
    },
    {
        reveal: "WUFIT08=",
        value: "dGhjdmRxeTlo"
    },
    {
        reveal: "QU1BWk9O",
        value: "ZHg2cTFmMjJk"
    },
    {
        reveal: "TElOS0VESU4=",
        value: "bTNkczZqOGdw"
    },
    {
        reveal: "UkVERElU",
        value: "d3EzdTkyb2Rj"
    },
    {
        reveal: "T0ZGSUNF",
        value: "a20wdHoxZjY2"
    },
    {
        reveal: "TkVURkxJWA==",
        value: "ams5YzM4c21w"
    },
    {
        reveal: "T1BFTkFJ",
        value: "Mzd6eXFwNXlj"
    },
    {
        reveal: "UElOVEVSRVNU",
        value: "YzkxeHY5dXpw"
    },
    {
        reveal: "V0VBVEhFUg==",
        value: "M2JydWh0M2tq"
    },
    {
        reveal: "UkVE",
        value: "Ymd1ZTcyc2d4"
    },
    {
        reveal: "QkxVRQ==",
        value: "a2xyNGdibnBq"
    },
    {
        reveal: "R1JFRU4=",
        value: "ZGtlMHV4YzQx"
    },
    {
        reveal: "WUVMTE9X",
        value: "cWl5NGd5eXg0"
    },
    {
        reveal: "UFVSUExF",
        value: "ZXNlcDh1dTlm"
    },
    {
        reveal: "UElOSw==",
        value: "NTc1YTV6eHFy"
    },
    {
        reveal: "T1JBTkdF",
        value: "ZmZ6ejFkd2Ro"
    },
    {
        reveal: "QlJPV04=",
        value: "c245MmNrZGg5"
    },
    {
        reveal: "QkxBQ0s=",
        value: "Y2twb2pkNzlj"
    },
    {
        reveal: "V0hJVEU=",
        value: "d3hraDhsNnhi"
    },
    {
        reveal: "R1JBWQ==",
        value: "ZzRpN3E5NHly"
    },
    {
        reveal: "R09MRA==",
        value: "YXRoNW94emZh"
    },
    {
        reveal: "U0lMVkVS",
        value: "YXQ0MGMwcDhv"
    },
    {
        reveal: "QkxVRQ==",
        value: "ZTN5eGoweWx6"
    },
    {
        reveal: "VEVBTA==",
        value: "eHo5ZnI4aXNr"
    },
    {
        reveal: "SU5ESUdP",
        value: "MnllZnI3dDJ4"
    },
    {
        reveal: "TUFHRU5UQQ==",
        value: "ZGJuMjh0b3Vp"
    },
    {
        reveal: "VklPTEVU",
        value: "Y2EzMnUyOXM0"
    },
    {
        reveal: "U0FMTU9O",
        value: "MDA2MnZtcjJ0"
    },
    {
        reveal: "Q1JJTVNPTg==",
        value: "ZXdnY3NmdW1r"
    },
    {
        reveal: "Q1lBTg==",
        value: "YzZxMDE0bW43"
    },
    {
        reveal: "UFJJTlRFUg==",
        value: "YmxuY3plZHcz"
    },
    {
        reveal: "Q0FORExFUw==",
        value: "c3Yzbm4xcmo1"
    },
    {
        reveal: "RFJJTEw=",
        value: "dGg4bDV5djN6"
    },
    {
        reveal: "RklSRQ==",
        value: "OWZpcmlid3V5"
    },
    {
        reveal: "TUlDUk9XQVZF",
        value: "b2VjdzNudmZ3"
    },
    {
        reveal: "UEVOQ0lM",
        value: "bzJ6eG1rZ3Zm"
    },
    {
        reveal: "UElMTE9X",
        value: "b3J0Y2NoYWNj"
    },
    {
        reveal: "U0FMVA==",
        value: "Z3gxcWpsYnZl"
    },
    {
        reveal: "UEVQUEVS",
        value: "bGVpa21obnI0"
    },
    {
        reveal: "U1BJQ0VT",
        value: "bGFxZDlkaHds"
    },
    {
        reveal: "U0hFRVRT",
        value: "ZzZyYmtkOGdk"
    },
    {
        reveal: "U09BUA==",
        value: "cnB1cnh6dDVu"
    },
    {
        reveal: "U1BBVFVMQQ==",
        value: "Ynl6NWJwejAy"
    },
    {
        reveal: "VEVMRVZJU0lPTg==",
        value: "aGE2OWVyazl4"
    },
    {
        reveal: "VE9BU1RFUg==",
        value: "Z2loajZtMzJ5"
    },
    {
        reveal: "UExBWUVS",
        value: "a21qbnV0c2ky"
    },
    {
        reveal: "RVFVQUw=",
        value: "em5ldnQ5dGdr"
    },
    {
        reveal: "TElHSFQ=",
        value: "dTdlNWNrOHl0"
    },
    {
        reveal: "REFSSw==",
        value: "MTl1M281aGk0"
    },
    {
        reveal: "RVZJTA==",
        value: "Z2hicTQyanN5"
    },
    {
        reveal: "R09PRA==",
        value: "M3F1anFoNWVw"
    },
    {
        reveal: "U0lHTg==",
        value: "dWl1ZjA3d2x6"
    },
    {
        reveal: "QUxFUlQ=",
        value: "Z3hhNmNuc2Uz"
    },
    {
        reveal: "TUVTU0FHRQ==",
        value: "cGV6NnFybmkz"
    },
    {
        reveal: "Uk9VVEVS",
        value: "c2wzeGd0OHF2"
    },
    {
        reveal: "Q0FCTEVT",
        value: "YWp0MWNleGU0"
    },
    {
        reveal: "UEFQRVI=",
        value: "ZzY0ajV2aGp6"
    },
    {
        reveal: "SU5L",
        value: "ODE2MDB6eTVz"
    },
    {
        reveal: "Q09OVFJPTExFUg==",
        value: "bGYwcnJyanpl"
    },
    {
        reveal: "Q0FNRVJB",
        value: "MW5xN2l0NXA2"
    },
    {
        reveal: "TU9ORVk=",
        value: "OGJib291eWNk"
    },
    {
        reveal: "UklDSA==",
        value: "NTJhNTltaWpu"
    },
    {
        reveal: "RkFJTFVSRQ==",
        value: "dmU1NzN5Mmh4"
    },
    {
        reveal: "VVBEQVRF",
        value: "eGFxaTU3Mmpn"
    },
    {
        reveal: "UE9QVUxBUg==",
        value: "aThkdzVyNmds"
    },
    {
        reveal: "SU5GSU5JVEU=",
        value: "a3lhZzE5anJr"
    }
]

export const correctKey = Keys[Math.floor(Math.random() * Keys.length)]