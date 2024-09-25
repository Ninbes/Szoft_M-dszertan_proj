https://plantuml.github.io/plantuml-core/raw.html?POyn3e8m58RtdkADE422R0tfHYUd6WzGfPR61XBQ64EyWCTWP73Y2BsOZuPWZDjxt_l-loaLIXit-3wCriDLsKQweSKbp1Ia0y49vNyKuQ7J86lfps4SZ8iK4Kc-VHSJvjt2JySzISAhzs6wAHicjzAS90SLtgWwwEnTEXpaUYlmrkdE8egaoedWaFP6DpvbCOora6KCE8MoL0-lsfgnI3SD8wJAeuK9-16nBHOLQ6o1vGlRCqyc-0S0  

@startuml  
:Felhasználó: as F  
:Log adatbázis: as Log  
(Értékelés) as US1  
(Leírás olvasása) as US3  
(Logolás) as E1  
E1 ..> US1 : <<extend>>  
F --> US3  
F -->US1  
E1-right-> Log  
@enduml  
