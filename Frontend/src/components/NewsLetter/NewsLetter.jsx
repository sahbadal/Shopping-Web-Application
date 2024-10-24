import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsletter">
    <h2>Join Our Exclusive Email Community!</h2>
    <p>Subscribe our newsletter to receive the latest news, <br />special discounts, and more directly in your inbox!</p>
    <div className="newsletter-form">
      <input type="email" placeholder="Enter your email" />
      <button type="submit">Subscribe</button>
    </div>
  </div>
  )
}

export default NewsLetter