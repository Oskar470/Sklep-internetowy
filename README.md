# Sklep-internetowy
Na czym polega sklep internetowy:

Prezentacja oferty – strona wyświetla katalog produktów lub usług (zdjęcia, opisy, ceny, warianty).

Wyszukiwanie i filtrowanie – użytkownik może łatwo znaleźć interesujący go produkt dzięki wyszukiwarce, filtrom (np. rozmiar, kolor, cena) i kategoriom.

Koszyk zakupowy – pełni rolę wirtualnego wózka, do którego klient dodaje produkty przed zakupem.

Proces zamówienia (checkout) – użytkownik podaje dane (adres, sposób dostawy, metoda płatności) i zatwierdza transakcję.

Płatności online – sklep integruje systemy płatności (np. BLIK, karty płatnicze, PayPal, przelewy online).

Dostawa – sklep organizuje wysyłkę zamówionych produktów, informując klienta o statusie zamówienia.

Interakcja z użytkownikiem:

Nawigacja i eksploracja – użytkownik klika, przewija i przegląda różne strony z ofertą.

Personalizacja – sklep może dostosowywać rekomendacje produktów do preferencji lub historii zakupów klienta.

Obsługa klienta – poprzez chat online, formularze kontaktowe czy sekcję FAQ.

Recenzje i opinie – użytkownicy mogą czytać i dodawać opinie o produktach.

Powiadomienia – klient otrzymuje e-maile lub powiadomienia o promocjach, rabatach i statusie przesyłki.


VER 0.00 BETA
pracowanie nad pomysłem


ver 00.01
🎯 Zastosowane zasady Clean Code:
1. Czytelne nazewnictwo

Funkcje nazwane według akcji: handleAddToCart, renderProducts,calculateCartTotal
Zmienne opisowe: PRODUCTS, NOTIFICATION_DURATION,state
Unikanie skrótów: productzamiast prod, categoryzamiastcat

ver 00.02
2. Zasada pojedynczej odpowiedzialności (SRP)

Funkcja robi jedną rzecz
renderCart()tylko renderuje, calculateCartTotal()tylko liczy sumę
Małe funkcje (5-15 linii kodu)

ver 00.03

3. DRY (Nie powtarzaj się)

Funkcje pomocnicze: getElement(), formatPrice(),findProductById()
Reużywalne komponenty: createProductCard(),createCartItem()

ver 00.04

4. KISS (Keep It Simple, Stupid)

Nie komplikuj kodu ponad potrzebę.

Funkcje i komponenty mają być proste, zrozumiałe i łatwe do modyfikacji.
Unikaj nadmiarowych warunków, zagnieżdżeń i magicznych liczb.
Jeśli coś da się zrobić prościej — zrób to prościej.

ver 00.05
5 (SRP) – Zasada jednej odpowiedzialności: Klasa lub moduł powinien mieć tylk
 o jeden powód do zmiany, czyli zajmować się tylko jedną, ściśle określoną funkcją






