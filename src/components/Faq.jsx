

const Faq = () => {
    return (
        <div className="my-[160px]">
            <div>
            <button className="bg-[#FFFFF5] rounded-[25px] border border-[#343268] w-[139px] h-[43.399px] text-[#020043] mb-[15px]">Faq</button>
            <h1 className="text-[#020043] font-semibold text-2xl md:text-[36px] mb-4">Frequntly Asked Question</h1>
            </div>
            <div>


                {/* accordion */}
                <div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium"> What are your office hours?</div>
  <div className="collapse-content">
    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
  </div>
</div>
                <div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">How can I schedule an appointment?</div>
  <div className="collapse-content">
    <p></p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Do you accept insurance?</div>
  <div className="collapse-content">
    <p></p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What should I bring to my appointment?</div>
  <div className="collapse-content">
    <p></p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Do you offer telemedicine appointments?</div>
  <div className="collapse-content">
    <p></p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Faq;