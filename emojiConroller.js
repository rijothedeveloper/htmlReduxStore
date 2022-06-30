const emojiArea = document.querySelector("#emoji");
const angryBtn = document.querySelector("#angry");
const happyBtn = document.querySelector("#happy");
const sadBtn = document.querySelector("#sad");
const confusedBtn = document.querySelector("#confused");

angryBtn.addEventListener("click", () => {
  store.dispatch({ type: "angry" });
  emojiArea.innerText = store.getState().mood;
});
happyBtn.addEventListener("click", () => {
  store.dispatch({ type: "happy" });
  emojiArea.innerText = store.getState().mood;
});
sadBtn.addEventListener("click", () => {
  store.dispatch({ type: "sad" });
  emojiArea.innerText = store.getState().mood;
});
confusedBtn.addEventListener("click", () => {
  store.dispatch({ type: "confused" });
  emojiArea.innerText = store.getState().mood;
});
