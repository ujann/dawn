# Spieltz: Änderungs- und Übertragungsverlauf

Jeder Eintrag nennt Zweck, Code-Stand, Shopify-Ziel, Prüfung und Rückweg. Ein Git-Commit ist nur dann als in Shopify übertragen bezeichnet, wenn diese Übertragung tatsächlich geprüft wurde.

## Anfangssicherung am 02./03.11.2026

### Veröffentlichter Code als Ausgangsstand

- Commit: [`3c91cf3`](https://github.com/ujann/dawn/commit/3c91cf302206fb49e3f4699f64d01bfd1a8011d0)
- Inhalt: vollständige 288 Theme-Dateien des veröffentlichten Themes `159373328728`, gelesen vor einer Übernahme des neuen Designs.
- Zweck: damaligen Live-Code unabhängig vom älteren Git-Stand `cb8f6de` sichern.
- Shopify: nur gelesen; kein Write und keine Veröffentlichung durch diese Sicherung.
- Prüfung: frisches API-Dateimanifest, unveränderte kopierte Dateien gegen API-MD5, Textkörper abweichender Dateien frisch gelesen. Der Commit-Baum stimmt mit dem lokalen Snapshot überein.
- Rückweg: dieser Commit ist der Code-Ausgangspunkt für eine Wiederherstellung des damaligen Live-Theme-Stands. Gemeinsame Shopdaten sind nicht enthalten.

### Vorschau vor der Designüberarbeitung

- Commit: [`f31f3e2`](https://github.com/ujann/dawn/commit/f31f3e2e1d52e2e2fb754d6db055856b79343312)
- Inhalt: 292 Dateien des zuvor gesicherten Vorschau-Ausgangsstands, einschließlich vorausgegangener Theme-Korrekturen.
- Zweck: Rückkehrpunkt direkt vor der Gestaltung sichern.
- Shopify: vorhandener historischer Vorschau-Snapshot; bei dieser Git-Sicherung nicht neu auf Shopify geschrieben.
- Prüfung: alle Dateien des Commit-Baums gegen den gesicherten Snapshot geprüft. 38 geänderte/zusätzliche Pfade gegenüber dem vorigen Code-Stand.
- Rückweg: diesen vollständigen Stand als neuen Rücknahme-Commit für die Vorschau herstellen und kontrolliert in den Entwurf übertragen.

### Derzeitiger Designstand zur Durchsicht

- Commit: [`8330e09`](https://github.com/ujann/dawn/commit/8330e09453d7bd782823a9734ffdbe8e11374a37)
- Inhalt: 297 Theme-Dateien, 18 geänderte/zusätzliche Pfade gegenüber der Vorschau vor Design.
- Shopify-Ziel: bereits umgesetzter, unveröffentlichter Entwurf `200823046488`. Erst nach der Gestaltung in dieses Repository übernommen; künftige Pakete folgen dem [Git-zuerst-Arbeitsweg](SPIELTZ-ARBEITSWEG.md).
- Änderungen: Figtree/Farben/eckige Gestaltung; Kopf/Footer; ursprüngliches Sortimentsbild oben; kompakte Hauptüberschrift und vier Einkaufswege; späterer Sortimentstext und Zitat; türkise 2-px-Rahmen um Produktbilder; Preisformat und Packungs-/Variantenanzeige samt Summenzeile; Warenkorbdarstellung. Produktstammdaten wurden dadurch nicht geändert.
- Prüfung: 297 Remote-Git-Blobs stimmen mit dem lokalen Snapshot überein, alle drei lokalen Commit-Bäume geprüft. 79 JSON-Dateien parsebar. Desktop-/Mobil- und Kaufwegprüfungen wurden in den jeweiligen Gestaltungsschritten durchgeführt; die Git-Sicherung selbst löste keine neue Bestellung oder Theme-Veröffentlichung aus. Letzter ausgeführter Theme Check: 2 bestehende Fehler/22 Warnungen; kein fehlerfreier Gesamtpass behauptet.
- Rücklesung: frische Shopify-Dateimanifeste vor/nach Git-Push unverändert; MAIN bleibt `159373328728`, Vorschau bleibt UNPUBLISHED. Shopify liefert JSON-Text teils in anderer Formatierung als die API-MD5-Basis; dort semantische Übereinstimmung geprüft, keine falsche Byteidentität zugesichert.
- Offen: vier Figurenbilder aus dem Claude-Entwurf und die gewünschte Position des Gewährleistungszugangs; weitere Designarbeit wartet auf die ergänzenden Claude-Unterlagen.
- Rückweg: Designänderungen gegenüber `f31f3e2` als neuen Rücknahme-Commit zurücknehmen und zuerst im Entwurf prüfen. Der frühere Live-Code ist zusätzlich in `3c91cf3` vorhanden.

## 03.11.2026 – Live-/Vorschau-Zuordnung und Git-Arbeitsweg dokumentiert

- Inhalt: `SPIELTZ-ARBEITSWEG.md` und diese Datei; keine Theme-Vorlage, kein CSS, kein JavaScript und keine Theme-Einstellung geändert.
- Tatsächlich im Shopify-Admin gesehen: `dawn/10.0.0-spieltz` ist das veröffentlichte Theme, verbunden mit `ujann/dawn/tree/10.0.0-spieltz`. Der bearbeitete Entwurf steht separat unter Theme-Entwürfe; Vorschau-Menü nennt Version 9.0.0, die geöffnete Shopvorschau zeigt **Draft**.
- Zweck: jede weitere beauftragte Theme-Änderung zuerst auf dem Arbeitsbranch versionieren und ihren Shopify-Übertragungs-/Prüfstand nachvollziehbar festhalten.
- Shopify: nur gelesen und Vorschau geöffnet; keine Datei gespeichert, keine Verbindung umgestellt, keine Veröffentlichung.
- Prüfung: tatsächliche Theme-Rollen zusätzlich über die Shopify-API bestätigt, Dokumentationslinks und Git-Diff geprüft.
- Rückweg: dieser Dokumentationscommit kann separat rückgängig gemacht werden; Shopdarstellung bleibt davon unberührt.

Die reine Sicherung/Dokumentation ist auf `codex/spieltz-vorschau-2026-11-02` gepusht. `10.0.0-spieltz` blieb unverändert. Für diese Commits wurde der geerbte, noch ungeprüfte Push-Workflow mit `[skip ci]` übersprungen; keine Workflow- oder Secret-Einstellung verändert.

## 03.11.2026 – Figuren-Zuordnung aus der Claude-Übergabe geprüft

- Inhalt: [Bildzuordnung und Einbaustatus](SPIELTZ-BILDER.md). Kein Theme-Code und keine Theme-Einstellung geändert.
- Quelle: ergänzende Übergabe mit Bild-README; die vier Kachelmotive sind jetzt eindeutig zugeordnet. Dateien ausdrücklich nur Screenshot-Referenzen, Originale aus JTL noch benötigt.
- Lokaler Abgleich: vier Figuren über den kleinen Kacheltiteln; 1280-Pixel-Desktop und 390-Pixel-Mobilansicht geprüft. Alle Bilder geladen, Bildhöhen 140/110 Pixel, Titel 18/17 Pixel, kein horizontaler Überlauf, elf Einkaufslinks erhalten.
- Shopify: keine Übertragung, keine Bild- oder Produktänderung, keine Veröffentlichung. Die Screenshot-Referenzen wurden nicht als fertige Shopbilder eingesetzt.
- Rückweg: nur dieser Dokumentationsstand würde zurückgenommen; kein Shopify-Rollback nötig. Die lokale Figurenansicht ist ein zusätzlicher Vergleich zum bestehenden Stand.
- Nächster Schritt: passende JTL-Originale anhand dieser Zuordnung beziehen und deren Einsatz in einem gesonderten, Git-gesicherten Vorschaupaket prüfen.

## 03.11.2026 – Vier Kachelillustrationen: Git-gesichertes Umsetzungspaket

- Freigabekorrektur: Die bereitgestellten Claude-Figuren sind für die Kacheln zu verwenden. Der vorher dokumentierte JTL-Originalblocker ist für diese Illustrationen aufgehoben. Produktfotos bleiben JTL-geführt.
- Inhalt: vier unveränderte PNGs als Theme-Assets, Bildauswahl je Kachel im Mehrspalten-Abschnitt, vier Zuordnungen in der Startseitenvorlage und Bildflächen 140/110 Pixel. Normales Bildfeld hat Vorrang; bestehende Abschnitte ohne Auswahl bleiben unverändert.
- Shopify-Ziel ausschließlich UNPUBLISHED `200823046488`. Vor diesem Commit noch nicht übertragen. Nach Übertragung folgt ein separater Prüfvermerk.
- Prüfung vor Transfer: Quellbilder bytegleich; Liquid/CSS/JSON bestehen den Shopify-Validator. Vollständiger Theme Check 3.24.0: 202 Quelldateien, 60 Checks, weiterhin 2 vorhandene Fehler/22 Warnungen außerhalb der Änderung; keine neuen Befunde. Cacheanlage im Sandboxbetrieb nicht möglich, mitgelieferte Prüfschemata genutzt. Kein Produktwrite, keine Veröffentlichung.
- Rückweg: die sieben Theme-Dateiänderungen dieses Pakets als neuen Rücknahme-Commit zurücknehmen und den so gesicherten Stand ausschließlich im Entwurf übertragen. Vorheriger Stand: `a5bcf74`; die vier neu hinzugefügten Assets können dabei kontrolliert entfernt werden.
