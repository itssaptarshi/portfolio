import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="projects"
    >
      <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" id="name" name="name" required=""/>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" id="email" name="email" required=""/>
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" id="number" name="number" required=""/>
        </div>
        <div className="form-group">
          <label>How Can I Help You?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
        </div>
        <button className="form-submit-btn " type="submit">Submit</button>
      </form>
    </div>
     
    </motion.div>
  </>
  );
};

export default Contact;
