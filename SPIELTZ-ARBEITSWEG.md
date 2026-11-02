# Spieltz: Theme-Arbeitsweg und Rücknahme

Stand: 03.11.2026. Dieser Branch enthält den in Bearbeitung befindlichen Spieltz-Theme-Code. Er ist kein veröffentlichter Shopstand.

## Welche Ansicht ist welche?

| Stand | Ort |
| --- | --- |
| Veröffentlichter Shop | https://spieltz-shop.de/ |
| Bearbeiteter Shopify-Entwurf | https://spieltz-shop.de/?preview_theme_id=200823046488 |
| Entwurf im Shopify-Editor | https://admin.shopify.com/store/spieltz-store/themes/200823046488/editor |
| Git-Arbeitsbranch | `codex/spieltz-vorschau-2026-11-02` |
| Bestehender Live-Branch | `10.0.0-spieltz` |

Im Shopify-Admin unter **Onlineshop → Themes** steht das veröffentlichte Theme oben als `dawn/10.0.0-spieltz`. Die neue Gestaltung steht darunter in **Theme-Entwürfe** als `Spieltz Vorschau – Footer Startseite Warenkorb ...`. Dessen Vorschau zeigt unten eine Shopify-Leiste mit **Draft**. Der zusätzliche ältere Entwurf `Dawn` ist nicht unsere bearbeitete Vorschau.

Am 03.11.2026 im angemeldeten Shopify-Admin geprüft: Das veröffentlichte Theme `159373328728` ist mit `ujann/dawn`, Branch `10.0.0-spieltz`, verbunden. Ein Push in diesen Branch kann deshalb den öffentlichen Shop sofort verändern. Unser Arbeitsbranch wurde mit keinem Theme verbunden. Der bearbeitete Entwurf hat die ID `200823046488` und ist nicht veröffentlicht.

Die bearbeiteten Dateien stammen aus Dawn; die Theme-Metadaten und der Shopify-Entwurf nennen Version **9.0.0**. Der historische Branchname `10.0.0-spieltz` ist kein belastbarer Nachweis der tatsächlichen Dateiversion. Es wurde kein anderes Basistheme eingeführt.

## Jede beauftragte Theme-Änderung wird in Git dokumentiert

1. Vorher den Zielentwurf, seine Dateistände und den aktuellen Git-Stand abgleichen. Fremde Änderungen zuerst einordnen; nichts blind überschreiben.
2. Die Änderung in der lokalen Arbeitskopie dieses Repositorys ausführen. Betroffene Dateien, Zweck, Prüfung und Rückweg im [Änderungsverlauf](SPIELTZ-AENDERUNGEN.md) benennen. Passende Code-/Darstellungsprüfungen und eine Prüfung auf versehentliche Zugangsdaten durchführen.
3. Das abgegrenzte Paket mit aussagekräftigem Commit auf dem Arbeitsbranch sichern und nach GitHub pushen. Für beauftragte Theme-Pakete ist diese Git-Sicherung Teil des Auftrags; sie benötigt keine neue Einzelrückfrage.
4. Ausschließlich den gesicherten Commit-Stand kontrolliert in den unveröffentlichten Shopify-Entwurf übertragen. Solange keine gesondert geprüfte automatische Verbindung besteht, erfolgt diese Übertragung gezielt über die Theme-Dateischnittstelle. Vorher Konflikte prüfen, danach betroffene Dateien zurücklesen und die echte Vorschau ansehen.
5. Übertragenen Commit, Ziel-Theme und tatsächliches Prüfergebnis im Änderungsverlauf ergänzen und ebenfalls committen/pushen. Fehlgeschlagene oder noch nicht ausgeführte Übertragungen klar so benennen.
6. Erst nach ausdrücklicher Freigabe über Übernahme in den Live-Branch oder Veröffentlichung entscheiden. Ein normaler Arbeitsbranch-Push ist keine Veröffentlichung. Kein Merge in `10.0.0-spieltz` allein zur Sicherung.

Keine unprotokollierten Direktänderungen am Live-Theme. Wenn eine notwendige Änderung im Shopify-Editor entsteht, deren tatsächlichen Dateistand unmittelbar wieder in Git übernehmen und prüfen, bevor das Paket als abgeschlossen gilt. Änderungen von anderen Beteiligten werden beim Abgleich sichtbar gemacht.

## Wie wird etwas rückgängig gemacht?

Der Verlauf enthält vollständige Code-Stände und die einzelnen Diffs. Für eine Rücknahme den passenden geprüften Stand als **neuen Rücknahme-Commit** herstellen, zuerst in der Vorschau testen und zurücklesen. Die Geschichte bleibt erhalten; kein Force-Push und kein Zurücksetzen gemeinsam genutzter Historie.

Die drei Anfangssicherungen stehen im [Änderungsverlauf](SPIELTZ-AENDERUNGEN.md). Eine Code-Rücknahme und deren Übertragung nach Shopify sind zwei getrennte, zu dokumentierende Schritte. Git allein ändert einen nicht verbundenen Vorschau-Entwurf nicht.

## Grenzen der Sicherung

Dieses Repository sichert Theme-Code und Theme-Einstellungen. Produkte, Preise, Bestellungen, Menüs, gemeinsame Shopseiten/Rechtstexte, Benachrichtigungen und Apps sind nicht vollständig im Theme enthalten. Solche beauftragten Änderungen benötigen einen eigenen Vorherstand und Rückweg; daraus keine vollständige Wiederherstellbarkeit durch Theme-Git ableiten. JTL führt weiterhin die Produktstammdaten.

Der übernommene Push-Workflow enthält Lighthouse mit einem über Secrets bestimmten, noch ungeprüften Shop-Ziel. Die reinen Sicherungs-/Dokumentationscommits überspringen ihn mit `[skip ci]`; Einstellungen, Secrets und fremde Shop-Zweige bleiben unverändert. Vor Nutzung dieser Automatisierung den Spieltz-Zielkontext gesondert prüfen. Kein ungeprüfter automatischer Live-Deploy.

Quellen: [Shopify-GitHub-Integration](https://shopify.dev/docs/storefronts/themes/tools/github), tatsächliche Shopify-Themeübersicht und GitHub-Verbindung vom 03.11.2026.
