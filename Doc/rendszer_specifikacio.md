# Rendszerspecifikáció

A követelményspecifikációban megfogalmazott feladatok elkészítés több ütemben készül el.
Az ütemterv első része az alábbiakat tartalmazza.

## A rendszerrel szemben támasztott általános követelmények
- A rendszer funkcióit csak bejelentkezett felhasználó használhatja.
- Webes, bizonyos funkciókhoz androidos felület.
- Adattárolás valamilyen <!--TODO-->adatbázison.

## Az alkalmazásokkal szemben támasztott funkcionális követelmények
- Felhasználókezelés
	- Vendég
	- Regisztrált felhasználó
    - Admin
### Regisztrált felhasználó által elérhető funkciók
- termék, és/vagy márka értékelése
- termék, és/vagy márka értékelésének megtekintése
- leírás megtekintése

### Vendég által elérhető funkciók
- leírás megtekintése
- termék, és/vagy márka értékelésének megtekintése

## Funkcionális követelmények
### Admin által elérhető funkciók
- minden más felhasználó által lehetséges funkció használata
- vihet fel a rendszerbe webes felületen keresztül:
 	- új termék, és/vagy márka hozzáadása leírással
	- termék levétele a felületről

## Felülettel szemben támasztott követelmények
- Web - az elkészített prototípusnak megfelelő
- Könnyen üzemeltethető rendszer
- Három szerepkör kezelése (admin, regisztrált, vendég)

--------------------------------------

## Adatbázis terv
- h2 database in memory

## Frontend
- Angular

## Backend
- Java 21
- Spring project
- Maven
  
Karakterkódolás UTF8.
