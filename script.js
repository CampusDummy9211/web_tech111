document.getElementById("submitBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const favChar = document.getElementById("favChar").value.trim();
  const favArc = document.getElementById("favArc").value;
  const favAnime = document.getElementById("favAnime").value.trim();
  const rating = document.getElementById("rating").value;
  const feedback = document.getElementById("feedback").value.trim();

  // Create JSON object
  const surveyData = {
    name: name || "Anonymous",
    favoriteCharacter: favChar || "Not provided",
    favoriteArc: favArc || "Not selected",
    favoriteOtherAnime: favAnime || "Not provided",
    rating: rating ? Number(rating) : "Not rated",
    feedback: feedback || "No feedback",
    submittedAt: new Date().toLocaleString()
  };

  // Show JSON result
  document.getElementById("output").textContent = JSON.stringify(surveyData, null, 2);
});
