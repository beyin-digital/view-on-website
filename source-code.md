---
marp: true
---

# Important parts of Source Code

---

The most important part of source code would have to be the subscription page. The pricing algorithms used to calculate the price of the subscriptions are one of the most complicated parts of the source code. The code for the pricing page is shown below.

---

Handling the values of the hashtag and sublink inputs is done using the useState hook. The hashtagDebounce variable is used to debounce the hashtag input so that the API is not called on every single character change.

```javascript
const [values, setValues] = useState({
  hashtag: "",
  sublink: "",
});

const allowedCharacters = /^[^$#.%\s]*$/;
```

---

The handleSubscription and handleCheckKeyword functions are used to handle the subscription and keyword checking API calls. The scrollToTarget function is used to scroll to the target element when the user clicks the "Check" button.

```jsx
const hashtagDebounce = useDebounce(values.hashtag, 200);
const { handleSubscription, handleCheckKeyword, keywordFound, isSearching } =
  useContext(KeywordContext);
const { token } = useContext(UserContext);

const scrollToTarget = () => {
  setIsScrolling(true);

  if (scrollTargetRef?.current) {
    scrollTargetRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  setTimeout(() => {
    setIsScrolling(false);
  }, 1000); // Adjust the delay to match your desired scrolling duration
};
```

---

Checks if the hashtag input value is an emoji or not

```js
function isEmoji(encodedValue: string) {
  const flagRegex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
  const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
  if (encodedValue.length == 4 && flagRegex.test(encodedValue)) {
    return true;
  } else if (encodedValue.length == 2 && emojiRegex.test(encodedValue)) {
    return true;
  } else {
    return false;
  }
}
```

---

Input field for the hashtag that changes stae depending on the length of the hashtag input value and whether or not the hashtag is available

```js
<OutlinedInput
  inputProps={{
    minLength: 1,
    maxLength: 13,
    pattern: allowedCharacters.test(values.hashtag),
  }}
  name="hashtag"
  sx={{
    width: "100%",
    height: {
      xs: "63px",
      md: "80px",
      xl: "80px",
    },
    fontSize: {
      xs: "18px",
      sm: "22px",
      md: "28px",
      xl: "32px",
    },
    lineHeight: "28px",
    background: "#FBFBFB",
    borderRadius: "20px",
    border: "1px solid #E3E3E3",
    ".MuiOutlinedInput-notchedOutline": {
      border: "0",
      padding: "9px",
    },
    "&:hover > .MuiOutlinedInput-notchedOutline": {
      border: "0",
    },
    "& input::placeholder": {
      fontSize: { xs: "18px", md: "22px", xl: "26px" },
    },
  }}
```

---

```js
  // className="borderSubscribeInput"
  value={values?.hashtag}
  placeholder={`${t("input_hashtag_one")}`}
  startAdornment={<BsHash color="#31E716" size={90} />}
  endAdornment={
    isSearching ? (
      <CircularProgress sx={{ color: "#343132" }} size={40} />
    ) : locale === "ar" ? (
      showAngledArrow && <FiArrowUpLeft color="#343132" size={90} />
    ) : (
      showAngledArrow && <FiArrowUpRight color="#343132" size={90} />
    )
  }
  className={`${!isInputValid ? "inputError" : ""} ${
    (values?.hashtag?.length === 1 ||
      values?.hashtag?.length === 2 ||
      values?.hashtag?.length === 3) &&
    !keywordFound
      ? "borderSubscribeInput"
      : ""
  }`}
  onChange={handleChange}
/>
```
