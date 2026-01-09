<h1 align="center">Dad Lang 👨‍👧‍👦</h1>
<p align="center">
  <b>A toy programming language based on strict Indian Parents.</b><br>
  <i>"Kyu paida kiya tujhe?" - Compiler</i>
</p>

<br>

<div align="center">
  <img src="https://media.giphy.com/media/l1IY7z6U4M50lFw40/giphy.gif" height="200" alt="Dad Logic" />
</div>

---

## 📦 Installation

```bash
npm i -g dad-lang
```

## 🚀 Usage

### 1. Create a file (e.g., `test.dad`)

```javascript
idhar aao
  // Variable Declaration
  ye sambhal pocketMoney = 500;
  
  // Const Declaration (Tradition)
  parampara familyName = "Sharma";

  // Conditionals
  agar sharam hai (pocketMoney < 1000) {
    jawab de "Dad, thode aur paise dedo?";
  } warna belt {
    jawab de "Kaafi paise hai, aish kar.";
  }

  // Loops
  ye sambhal round = 1;
  jab tak main na bolu (round <= 5) {
    jawab de "Padhai kar raha hun... iteration", round;
    round += 1;
  }
jao padhai karo
```

### 2. Run it

```bash
dadlang test.dad
```

_(For development, run: `node packages/cli/bin/index.js test.dad`)_

---

## 📖 Vocabulary

See [CHEATSHEET.md](./CHEATSHEET.md) for the full Dictionary (C++ vs Dad Lang).

| Dad Lang | Meaning (Context) |
| :--- | :--- |
| `idhar aao` | Start of Program ("Come here") |
| `jao padhai karo` | End of Program ("Go study") |
| `ye sambhal` | Declare Variable ("Handle this") |
| `parampara` | Declare Constant ("Tradition") |
| `jawab de` | Print ("Answer me") |
| `agar sharam hai` | If ("If you have shame") |
| `nahi to bhai` | Else If |
| `warna belt` | Else ("Otherwise... belt") |
| `jab tak main na bolu` | While Loop ("Until I say so") |
| `bas paanch minute` | Sleep |
| `chori chuppe` | Try |
| `pakde gaye toh` | Catch |

---

## 🔥 Unique Features (The "Dad" Experience)

Dad Lang isn't just a syntax wrapper; it simulates the **environment** of coding with a strict Dad watching over you.

### 1. Mood Meter 😡 (Runtime Limit)
Dad has limited patience. If your code runs too long (e.g., infinite loops or > 1000 operations), he **will** explode:
> *"Din bhar computer pe baitha rehta hai! Band kar isko!" (Runtime Limit Exceeded)*

### 2. High BP 🩸 (Memory Limit)
Don't stress Dad out with too many things. If you declare more than **15 active variables**, he raises his voice:
> *"Mera BP badha diya tune! Itna raita kyu failaya hai?" (Variable Limit Exceeded)*

### 3. Parampara 🛐 (Immutability)
Traditions are sacred. Use `parampara` for constants. If you try to reassign them:
> *"Sanskaro ki dhajjiya uda di!" (Assignment to constant variable)*

### 4. Sleep ... maybe? 🛌
You can ask for a break using `bas paanch minute <ms>`.
**BUT**, there's a **10% chance** Dad will ignore you and say:
> *"Bahut ho gaya, uth abhi!" (Sleep ignored)*

### 5. Taana Generator 🗣️ (Unused Variables)
If you declare a variable `x` but never use it, Dad will roast you at the end of the program:
> *"Ye 'x' kyu paida kiya jab iska koi kaam hi nahi tha?"*

---

## 👨‍👩‍👦 Khandaan (OOP)

Dad Lang supports Object-Oriented Programming (OOP) because traditions run in the family.

*   `khandaan`: Class ("Family/Lineage")
*   `ka_khoon_hai`: Extends ("Has the blood of")
*   `avtaar`: New ("Incarnation")
*   `khud`: This ("Self")
*   `sanskar`: Constructor ("Values/Rituals")

```javascript
khandaan Pita {
    sanskar(naam) {
        khud.naam = naam;
    }
}
khandaan Beta ka_khoon_hai Pita {}
ye sambhal bacha = avtaar Beta("Rohan");
```

## ☕ Rishtedaar (Switch-Case)

When relatives visit, you have to behave differently based on who it is.

*   `rishtedaar_aaye`: Switch ("Relatives came")
*   `muh_dikhai`: Case ("Showing face ceremony")
*   `bache_kuche`: Default ("Leftovers")

```javascript
rishtedaar_aaye (relative) {
    muh_dikhai "Bua": jawab de "Pair choo le beta";
    bache_kuche: jawab de "Hi uncle";
}
```

## 🛒 Rashid Pani & Chugli

*   **Standard Library**: `kismat()` (random), `tol_mol(val)` (round), `taarik_pe_taarik()` (date).
*   **Comments**: Start lines with `chugli:` to gossip privately (ignored by compiler).

## 🧮 Hisaab (Arrays)

*   `ye sambhal list = [1, 2, 3];`
*   Methods: `.aukaat` (length), `.thoos_de(val)` (push), `.nikal_fek()` (pop).

---
