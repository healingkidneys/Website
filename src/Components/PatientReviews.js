import React, { useState } from 'react';
import Colors from '../Components/Color';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PatientReviews = () => {
  const reviews = [

    {
      id: 1,
      text: "Best Nephrology in Texas - Hands down one of the best doctors in Texas. Doctor Gandra and her staff(Veronica & Diana) are truly amazing, that's why I'm trying to figure out who idea is it to remove Veronica to another office. If it's not broke, don't touch it! As a patient when you walk in the doctor, it could be one of the most scariest place, but at the location you always walk into a smiling face by Veronica and Diana(and they always know you by name not a chart). Dr. Gandra and her staff is exceptional. KEEP THEM TOGETHER!",
      author: "James McGee",
      link: "https://www.healthgrades.com/physician/dr-sushmitha-gandra-32f6x"
    },
    {
      id: 2,
      text: "Was referred by PCP for high blood pressure. Front desk very good about explain what Dr. is ordering and professional. Has had stress free visits.",
      author: "Jo Ann Koontz",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"

    },
    {
      id: 3,
      text: "I have nothing bad to say. Medical staff help get medication assistance.",
      author: "Richard Kohler",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 4,
      text: "Dr. Vuppali is very knowledgeable and professional. Her staff is very friendly and helpful.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 5,
      text: "She took THE best care of my dad!! She was very attentive, respectful, explained everything to us clearly where we could understand. If I needed a nephro I would choose her with my life 💜.",
      author: "Yo Mama",
      link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNaN2FfQmhRRRAB!2m1!1s0x0:0xede38bc716d3941b!3m1!1s2@1:CIHM0ogKEICAgICZ7a_BhQE%7CCgsIhO-TqAYQqLHTOg%7C"
    },

    {
      id: 6,
      text: "Always great, easy to talk to, pleasant, professional, and has a good bedside manner.",
      author: "Charles Martin",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 7,
      text: "Dr. Vuppali is a good doctor, she is always aware of my kidneys and makes sure everything is looking good.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 8,
      text: "Dr. Vuppali is efficient and she cares for her patients.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 9,
      text: "Shes really easy to talk to, seems like she really cares about the patient.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 10,
      text: "Follow Up appointment - The doctor was very knowledagable and was very interested in my well being. was very sincere.",
      author: "Flores, Martin",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 11,
      text: "Dr. Vuppali is very concerned about my issues and takes the time to address them. I never have to second guess her medical advice, or her plan of care.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 12,
      text: "Best of my Doctors - Dr Gandra treats me like a friend that she cares about. She is very concerned about my issues and takes the time to address them. I wish all doctors would have the commitment to patients that she has. Just want to thank her for who she is.",
      author: "A DOCTOR I WANT ON MY SIDE",
      link: "https://www.healthgrades.com/physician/dr-sushmitha-gandra-32f6x"
    },

    {
      id: 13,
      text: "I feel very blessed that I found Dr Vuppali. She cares very much about her patients. She explained everything about my illness, so I could understand exactly what I needed to do to take care of myself. I have made some diet changes per her recommendation and now I'm doing much better.",
      author: "F Rodriguez",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 14,
      text: "She's a great doctor and takes her time explaining things & listening to each patient. She's also very thorough and thinks about the ENTIRE body, and not just the kidneys. Her and her staff are very kind, patient and gracious. My only reason for not giving 5 ⭐'s is bc the wait time can be long a lot of the time. But I understand why, it's bc she takes time with each patient instead of rushing us out of the door. Personally I think she's worth the wait; I just bring a good book & get comfortable in the lobby.",
      author: "QuirkyCercle",
      link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUM2ek1HMzFnRRAB!2m1!1s0x0:0xede38bc716d3941b!3m1!1s2@1:CIHM0ogKEICAgIC6zMG31gE%7CCgwIxJ-5iQYQyOvvgQE%7C"
    },
    {
      id: 15,
      text: "We saw Dr Gandra, she is very caring and listened to my concerns , we wish her well always.",
      author: "Gomez Sara",
      link: "https://www.google.com/maps/contrib/116277555914223581337/place/ChIJUcnuXz3LQIYR0oLtWCrvkaQ"
    },
    {
      id: 16,
      text: "God gift to profession amazing doctor best in clinical care and patient management always available . All the staff love her.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-sushmitha-gandra-32f6x"
    },

    {
      id: 17,
      text: "Dr. Vuppali is truly cares about her patients, she is always passionate about educating her patients and helping them get better & healthy. She clearly explains the condition, treatment plan and any risks involved.",
      author: "Ronald Jen",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 18,
      text: "Excellent doctor who truly cares for her patients . A very good listener with compassion. She values patient / doctor relationship ., I feel truly blessed for the care and guidance she has provided . Her entire staff is always available , kind and professional. Thank you Dr. Vuppali and staff!",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 19,
      text: "I am so grateful to have found Dr Vuppali. She is a good listener, understands that body works as a whole and takes time to explain treatment. A doctor who is willing to explain the reason behind a prescription with tons of information deserves my trust. I don't write many reviews, but she totally deserves 5 stars.",
      author: "Sonia V",
      link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURJcE1DdUxBEAE!2m1!1s0x0:0xede38bc716d3941b!3m1!1s2@1:CIHM0ogKEICAgIDIpMCuLA%7CCgwI6tP24AUQvNycoQM%7C"
    },
    {
      id: 20,
      text: "She explains everything and answers my questions. She also checks up on you if you go to the hospital and i’m very pleased with how she treats me as her patient.",
      author: "Armstrong L. in Shenandoah",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 21,
      text: "The doctor is able to answer all of my questions in regards to my condition and does a wonderful job at explaining them. She is also very polite and is able to follow up with me at the hospital which really surprised me. I really like that she can check on me at the hospital.",
      author: "McCarty",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 22,
      text: "She shows that she truly cares about her patients, especially with her availability. She pays very close attention to detail.",
      author: "Shijy",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 23,
      text: "Doctor is great, I like her. I trust her wholeheartedly. Plan of care is clear, it's obvious that she has a plan. I would recommend her to everyone.",
      author: "David S.",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 24,
      text: "During my visits, everything goes smoothly and on time with Dr. Vuppali. The visits usually involve a lot of attention in regards to my health. Dr. Vuppali goes into depth, and spends the appropriate amount of time explaining and answering vital questions. Not only does she take the time to review my care plan, she has also seen me in the hospital twice when I was admitted for kidney stones.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 25,
      text: "She helps answer my questions, and also takes the time to help me understand everything. She has great bedside manners, and also is prompt to reply with any concerns I may have.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 26,
      text: "Dr. Vuppali shows genuine concern over me and my wife, and I never have to second guess her medical advice, or her plan of care. Compared to other physicians, she take the time to express concern and help for us especially during our visits to the office.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 27,
      text: "She is able to explain my care plan, depending on routine lab work. She is very kind and gentle, and am very pleased.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 28,
      text: "I am very grateful for the help that the doctor has offered me. She is very helpful in explaining certain aspects in regards to dialysis. She also answers my questions in full, and is able to provide explanations over my questions. If it weren't for her I wouldn't be doing my dialysis as frequently as I am.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 29,
      text: "Dr. Vuppali is very helpful with any questions or issues that we have. She is also very friendly, and she takes the time to explain if patients have questions.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 30,
      text: "Dr. Vuppali is very friendly and thorough. Her ability to answer our questions exceeds our expectations every time. When I am in the hospital she coordinates a consult to help better assist my care plan and also with other physicians on the case.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 31,
      text: "She is very thorough and is fast. She knows what she is doing. She is good at explaining any concerns or questi",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 32,
      text: "When I was in the hospital, it only took her a day to determine that the medication that they had prescribed was bad for my kidneys, and I was genuinely impressed by that. Physician is very attentive with her patients, and very sweet. Physician works with us as far as scheduling goes.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 33,
      text: "Doctor is very sweet, is very good at explaining things to the patient.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 34,
      text: "Being her patient, she does an excellent job of taking care of my health, and is part of the reason I am still alive today.",
      author: "Truman",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 35,
      text: "She is great as far as explaining things, and is excellent on staying on top of what I need to do for my health.",
      author: "Nikita",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 36,
      text: "She is consistent with her patients.",
      author: "Jim",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 37,
      text: "She’s been treating most of our family. She is the best of the best. Is very nice, and super friendly.",
      author: "Ubina",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 38,
      text: "She’s asks patients questions and listens in regards to their own questions as well.",
      author: "Michael",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 39,
      text: "Very kind, personable, caring, and expresses real concern for her patients. Has a beautiful smile.",
      author: "Ellen",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 40,
      text: "She’s very thorough, and cares for her patients. She’s very friendly, and has wonderful manners.",
      author: "Ronald",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 41,
      text: "Content with services, explains very well any conditions, and very friendly.",
      author: "Hyo in Spring",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 42,
      text: "Physician stayed in contact with me to help monitor calcium until it was under control after discharge from hospital.",
      author: "David",
      link: "https://www.healthgrades.com/physician/dr-sushmitha-gandra-32f6x"
    },
    {
      id: 43,
      text: "Truly caring, and amazing personality, she truly cares for her patients.",
      author: "Eugene in TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 44,
      text: "Saved my life, she’s always taking very good care of me. She is very good with explaining conditions, and all situations.",
      author: "Richard in TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 45,
      text: "She's a really nice person, and I think she's a good doctor.",
      author: "Diann in TX",
      link: "https://example.com/jane-doe"
    },
    {
      id: 46,
      text: "Dr. Vuppali exceeds my expectations in caring for my unique & complex health needs. She was influential in recommending the care needed to recover from one of my most difficult situations. I am grateful for her compassion & expertise, which helps manage my ongoing health issues. When hospitalized, she visits & actively manages my care with other specialists holistically. She & her staff are very responsive. I especially recommend her for patients experiencing progressive ESRD & on dialysis.",
      author: "S. Holmes in Houston, TX",
      link: "https://example.com/jane-doe"
    },
    {
      id: 47,
      text: "We were referred to Dr. Vupali by my dad's heart surgeon. My dad's current renal Dr. didn't see patients at that hospitaI. I was concerned for my dad's health & switching to a new Dr. So I reached out to Dr. Vuppali & her staff ahead of time. They went over & beyond to accomdate us before, during & since the procedure. Dr. Vuppali is now my dad's doctor. We are treated like family & feel like his health is a priority. Great communication & prompt responses. So glad we were referred to her!",
      author: "CYPRESS",
      link: "https://example.com/jane-doe"
    },
    {
      id: 48,
      text: "Very caring.",
      author: "Dean Reynolds in The Woodlands",
      link: "https://example.com/jane-doe"
    },

    {
      id: 49,
      text: "I love Dr. Vuppali. She is such a warm woman. She makes me feel good. I trust her. If only all Doctors were like her the world would be a wonderful world. I’m putting my trust in her. Love",
      author: "Belinda Carson in Houston, Texa",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 50,
      text: "Dr. Vuppali is an amazing doctor. She truly care about her patients. I'm so glad I found her.",
      author: "Yvonne in Spring,Tx",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 51,
      text: "Dr. Vuppali is very detail oriented, friendly and evidence based. She can treat conditions that other doctors missed and cares about your overall health rather than just her speciality. She is always approachable and is an excellent human being very rare to find in present times.",
      author: "Randy in Spring",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 52,
      text: "Dr. Vuppali listens to my concerns and understands my issues. The staff are friendly and the Office appears organized and well managed.",
      author: "eva in Spring, TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 53,
      text: "I looked to Health grades to find a highly recommended Nephrologists. I have not been disappointed. She very professional yet listens to the patient with great concern before making recommendations for treatment.",
      author: "Shirley in Conroe, TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 54,
      text: "Dr. Vuppali and her staff were very cooperative and very helpful. They scheduled, managed and did regular visits to my sister who came here from Philadelphia for a month in an excellent way. They were on their toes whenever we text or call them and especially rescheded her visits during the Hurricane Harvey. I strongly recommend her as she takes her patients with love and care.",
      author: "Sumera Cecil in Spring, TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 55,
      text: "Met Dr Vuppali when in was hospital and was very impressed with her bedside manner and actually listening to me when other drs just run in and do what they need and they are out. She answered all question and her knowledge is quite vast. I already had a Doctor but chose to move to her as she actually takes the time listen. And not trying to rush you out the office.",
      author: "Richard in Conroe, TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 56,
      text: "She is very knowledgeable and takes the time to explain in details.",
      author: "steve in Conroe, TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 57,
      text: "Dr. Vuppali, is a wonderful doctor. She is always very concerned and cares a great deal for the medical needs of her patients. Very kind hearted.",
      author: "Ellen Oklli in Spring, TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 58,
      text: "I was treated by Dr. Vuppali and was devastated when she left our clinic I would travel anywhere to be her patient again!",
      author: "Maria Maltese in Houston, Tex",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 59,
      text: "She is very detail oriented.",
      author: "EJohnson in Houston, TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 60,
      text: "I moved from downtown Houston up to the woodlands area found the staff to be extremely friendly the doctor showed quite interest in my health and wellness excellent service.",
      author: "Mel B in Houston, TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 61,
      text: "Dr. Vuppali is an amazing physician. I travel 1.5+ hours to use her. I have had a lot of health issues and many hospitalization and Dr. Vuppali saw me ever single day I was hospitalized. She is very clear when she is explaining things and we never leave an appt wondering. Her office staff is very friendly and is always helpful. I recommended my grandfather when he needed a Nephrologist.",
      author: "Justin C in Livingston, TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 62,
      text: "I absolutely adore Dr Vuppali. She is by far the best doctor I have ever encountered. My husband was seeing a different Nephrologist and was having issue after issue. We then started seeing Dr Vuppali and has been doing much better. He has other health problems (not related to his kidneys) and Dr Vuppali has been with us every step of the way... even when she didn't have to be. I would recommend her to anyone!!!!",
      author: "Kayla C in Livingston",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 63,
      text: "Knows every patient by name, knows beyond her craft to make sure that the patient is well.",
      author: "L. Martin in Spring, TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 64,
      text: "Dr. Vuppali has been my doctor for the past 3-4 years. She has always treated me with very personal care. She hasn't always only talked healthcare. We talk family, kids, and other things during our visit. Dr. Vuppali has always shown a great care for my health and strives to give me the best care. I have complete confidence in her medical decisions for me.",
      author: "Lupus with Boys in Houston, T",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 65,
      text: "My husband and I meet Dr Vuppali about 5 years ago due to my husband's kidney failure... she was such a blessing to us and continues to be! She is very knowledgeable at what she does. Extremely caring... and reallg just the BEST!!!",
      author: "Maritza Garcia in Conroe , TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 66,
      text: "My father in-law moved to Houston from Nepal and needed to locate a new nephrologist. I was impressed with my and my husband research that we found on google for Dr. Vuppali. I called her office available on google and gave her call and got all help, information that we needed to dialysis for my father in law. I am very comfortable with Dr.Vuppali analysis of his condition, the treatment and her dedicated follow-up and communication. She is very sweet , nice and ready to help anytime.",
      author: "Saraswati Subedi in Spring, TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 67,
      text: "Dr. Vuppali's scores on this survey was my initial introduction to her. It wasn't by word of mouth or anyone's recommendation of her, but what I read about her online. I noticed that her scores were almost too good to be true, so I was a bit skeptical, but made an appointment anyway. Fortunate for me she was able to see me the same day. Her bedside manner is very professional and caring. She is soft spoken and listens carefully as you describe your symptoms. I would certainly recommend Dr. V",
      author: "C. J. in Houston, TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 68,
      text: "I just moved to Houston and needed to locate a new nephrologist. I was impressed with my research I found on Healthgrades and other sites for Dr. Vuppali. My visits have reinforced this also. I am very comfortable with her analysis of my condition, the treatment and her dedicated follow-up and communication.",
      author: "Kelly H in Spring, TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 69,
      text: "Doctor Vuppali is easy to communicate with and very thorough. She is doing a great job treating a condition that I have seen many different doctors for. I feel comfortable under her care.",
      author: "Nick M in Spring, TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 70,
      text: "Dr. Vuppali is very informative with respect to varying dialysis programs. She's very easy to reach in communication and quickly responsive. Questions regarding patient condition are easily answered by her. She does a good job checking up on patients and seeing their progression.",
      author: "Spring, TX",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-10"> {/* Reduced top and bottom padding */}
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">

          {/* Title */}
          <h2 className="text-3xl font-bold mb-4" style={{ color: Colors.headingBlue }}> {/* Reduced bottom margin */}
            Patient Reviews
          </h2>

          {/* Review Container */}
          <div className="relative w-full max-w-5xl">
            <div className="flex items-center">
              {/* Left Arrow */}
              <button
                onClick={handlePrevious}
                className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Review Content */}
              <div className="flex-1 px-4 min-h-[200px] flex flex-col justify-center">
                <p className="italic text-lg mb-2 transition-opacity duration-300" style={{ color: Colors.paragraphGray }}> {/* Reduced bottom margin */}
                  {reviews[currentIndex].text}
                </p>

                <p className="font-medium" style={{ color: Colors.headingBlue }}>
                  <a
                    href={reviews[currentIndex].link || '#'} // Fallback to '#' if no link is provided
                    className="no-underline hover:no-underline"
                    style={{
                      color: isHovered ? Colors.reviewsLinkshover : Colors.headingBlue, // Change color based on hover state
                      transition: 'color 0.3s ease', // Smooth transition for hover effect
                    }}
                    aria-label={`More reviews from ${reviews[currentIndex].author}`}
                    target="_blank" // This makes the link open in a new tab
                    rel="noopener noreferrer" // This improves security
                    onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                    onMouseLeave={() => setIsHovered(false)} // Set hover state to false
                  >
                    - {reviews[currentIndex].author}
                  </a>

                </p>

              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {reviews
                .slice(
                  Math.max(0, currentIndex - 2), // Start from two before the current index
                  Math.min(currentIndex + 3, reviews.length) // Up to three after the current index
                )
                .map((_, index) => {
                  // Calculate the actual index in the reviews array
                  const actualIndex = Math.max(0, currentIndex - 2) + index;
                  return (
                    <button
                      key={actualIndex}
                      onClick={() => setCurrentIndex(actualIndex)}
                      className={`w-2 h-2 rounded-full transition-colors ${currentIndex === actualIndex ? 'bg-blue-900' : 'bg-gray-300'
                        }`}
                      aria-label={`Go to review ${actualIndex + 1}`}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientReviews;
