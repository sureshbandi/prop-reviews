const reviews = [
  { propertyId: "ptt1", rating: 3.5, review: "423", reviewType: "society" },
  {
    propertyId: "ptt1",
    rating: 3.5,
    review: "424",
    reviewType: "property",
  },
  {
    propertyId: "ptt2",
    rating: 4.5,
    review: "423",
    reviewType: "property",
  },
  {
    propertyId: "ptt3",
    rating: 3,
    review: "423",
    reviewType: "society",
  },
  {
    propertyId: "ptt4",
    rating: 2.5,
    review: "423",
  },
  {
    propertyId: "ptt5",
    rating: 4.5,
    review: "42443",
  },
];

const KEY_REVIEWS = "reviews";

(function init() {
  let r = getReviews();
  if (!r || r.lenght == 0) localStorage.setItem(KEY_REVIEWS, JSON.stringify(reviews));
})();

function getReviews() {
  let r = localStorage.getItem(KEY_REVIEWS);
  if (r) return JSON.parse(r);
  return [];
}

function createReview(review) {
  const reviews = getReviews();
  reviews.unshift(review);
  localStorage.setItem(KEY_REVIEWS, JSON.stringify(reviews));
}

function getReviewsByPropId(propId) {
  const reviews = getReviews();
  return reviews.filter((r) => r.propertyId == propId);
}

export { getReviews, createReview, getReviewsByPropId };
