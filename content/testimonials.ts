export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  result: string;
  initials: string;
};

const testimonialRows = [
  ['Reva', 'Passed NCLEX-RN', 'Good morning Sir, I appeared for my NCLEX-RN exam on 31 March 2026 and my exam got cleared. Thank you for your role as an educator and for all the motivation and positivity you provide to students.'],
  ['Jashandeep', 'Verified student review', 'Waheguru ji di kirpa and Angrej sir di blessing nal mera exam clear ho gaya. Thank you so much sir and team for all the support and hard work.'],
  ['Paramjot Kaur', 'Passed NCLEX-RN', 'Thank you so much sir. Because of your motivation and confidence-building, I was able to clear my RN exam. You are the best teacher and your guidance helped me achieve success.'],
  ['Het Bhavik', 'Passed NCLEX', 'Angrej sir, thank you so much. Many difficult topics became easy because of your teaching style. Your guidance made the NCLEX journey smooth and understandable.'],
  ['Jaspal', 'Passed NCLEX', 'Waheguru ji ka khalsa waheguru ji ki fateh. Thank you for helping me in every step of study because finally I cracked the NCLEX exam. I feel lucky to have you as my teacher.'],
  ['Ramandeep', 'Verified student review', 'I’m really happy to share that I’ve cleared my exam. Managing a full-time job with preparation wouldn’t have been possible without your guidance and clarity in teaching.'],
  ['Jaspal Kaur', 'Verified student review', 'I was an average student but with your guidance and Waheguru ji’s blessings, I passed my test. Thank you for all your hard work and support.'],
  ['Harvinder', 'Verified student review', 'I passed my exam in the first attempt. I truly couldn’t have done it without your guidance and support. Thank you to you and your entire team for creating such a supportive learning environment.'],
  ['Muskaan', 'Passed NCLEX', 'Finally we did it. I passed my NCLEX exam. Thank you for guiding me and making it possible. Waheguru ji bless you always.'],
  ['Harshpreet', 'Verified student review', 'Sir, I truly don’t have enough words to express my gratitude. Your videos, guidance, motivation, and support helped me improve myself and successfully clear the exam.'],
  ['Amandeep', 'Passed NCLEX-RN', 'Thank you so much Sir ji for your help and support. I passed my NCLEX RN today. Because of your hard work and guidance, I was able to pass my exam.'],
  ['Gurpreet', 'Passed NCLEX-RN', 'I successfully passed my RN exam. Your mentorship, encouragement, and support throughout my preparation made all the difference.'],
  ['Swinky', 'Passed NCLEX-RN', 'I’m very happy to share that I cleared my NCLEX RN exam. Your teaching style and unique tricks truly helped me during the exam.'],
  ['Harkiran', 'Passed NCLEX', 'I passed my NCLEX and want to thank you for both the NCLEX lessons and life lessons. You are truly a blessed soul making nurses and serving humanity.'],
  ['Navdeep', 'Passed LPN exam', 'I passed my LPN exam. Your teaching, encouragement, and patience really helped me achieve this. I truly appreciate everything you did for me.'],
  ['Gurvinder', 'Verified student review', 'Waheguru ji ne laaj rakh layi, mera exam pass ho gaya. Thank you so much for everything and for all your support.'],
  ['Rishu', 'Verified student review', 'I cleared my exam. Thank you so much for your guidance and support throughout this journey.'],
  ['Aroma', 'Verified student review', 'I passed my exam. Your motivation before every class helped me stay positive and calm during stressful times.'],
  ['Mehreen', 'Passed NCLEX-RN', 'I want to express my heartfelt thanks for your guidance, support, and education. Your wonderful teaching and patience helped me successfully pass my NCLEX RN exam.'],
  ['Amanjot', 'Verified student review', 'Because of your teaching and motivation, I gained confidence and cleared my exam. You are not only a great teacher but also a positive human being.'],
  ['Simran', 'Verified student review', 'I cleared my exam in my first attempt at 85 questions. Thank you to Angrej sir and the entire team for all the support and teachings.'],
  ['Manpreet', 'Passed NCLEX', 'Sir NCLEX ta teach hor koi vi kar sakda but tusi jis tarah support and motivation dinde ho, oh kise hor ton possible nahi. Thank you so much.'],
  ['Kiran', 'Verified student review', 'With your blessings and hard work, I achieved my dream. Your teaching during stressful moments made everything feel easy and manageable.'],
  ['Gaganpreet', 'Verified student review', 'Thank you so much sir. With your guidance, family support, and Waheguru ji’s blessings, my exam got cleared.'],
  ['Jasleen', 'Verified student review', 'Without your efforts this was not possible. Your teaching style and motivation inspired me deeply. You are my inspiration.'],
  ['Navjot', 'Verified student review', 'My exam got cleared. This entire journey became possible because of your motivation and teaching. You are the best teacher.'],
  ['Daljeet', 'Verified student review', 'Waheguru ji di kirpa nal mera exam clear ho gaya. Thank you so much sir. I don’t have enough words to thank you. Waheguru ji always keep you blessed.'],
  ['Ravi', 'Passed LPN exam', 'Thank you sir. I passed my LPN test in first attempt. Everything became possible because of your guidance and teaching style. Under your guidance I passed in first attempt.'],
  ['Amanpreet', 'Verified student review', 'With Waheguru Ji’s blessings, I passed my exam. I truly appreciate all the support and encouragement received from your team throughout this journey.'],
  ['Mehak', 'Passed RN and RPN', 'I’ve passed both my RPN and RN exams. This achievement wouldn’t have been possible without your constant guidance, support, and belief in me.'],
  ['Jyotsana', 'Passed NCLEX-RN', 'My NCLEX-RN exam shut off at 150 questions after a long 5-hour journey, but your teaching and encouragement gave me confidence till the end.'],
  ['Ravneet', 'Verified student review', 'Thank you so much for helping me a lot. During exam days, your team’s motivation and positivity never let my confidence go low.'],
  ['Neha', 'Verified student review', 'Thank you so much sir ji. Because of you I passed. Please don’t remove me from the group because I still want to continue my LPN process.'],
  ['Komal', 'Verified student review', 'I have no words to express how thankful I am. Clearing my exam feels like a dream. I was an average student but you helped me clear in my first attempt.'],
  ['Kuljeet', 'Passed NCLEX', 'I had a 12-year gap in studies and was very nervous, but under your coaching, encouragement, and structured guidance, I passed my NCLEX in the first attempt.'],
  ['Parveen', 'Passed NCLEX-PN', 'I cleared my RPN exam in first attempt. This became possible because of Waheguru ji’s blessings and your hard work on students.'],
  ['Swerangini', 'Verified student review', 'My result came and I passed. One year of hard work finally paid off. I’m truly grateful and cannot express my gratitude in words.'],
  ['Maninder', 'Verified student review', 'My exam got cleared. Thank you for being such an inspiring teacher. Your lessons helped shape my future.'],
  ['Pardeep', 'Passed NCLEX-RN', 'I passed my NCLEX-RN exam. Your teaching style is wonderful and my whole family appreciates your dedication and support.'],
  ['Shivika', 'Verified student review', 'You motivated me throughout my RN journey. Without you this was not possible. My family also thanks you from the heart.'],
  ['Madhu', 'Verified student review', 'My exam got cleared. Your positivity in classes helped me manifest success. Thank you for everything and for always motivating students.'],
  ['Rajveer', 'Passed NCLEX', 'With Waheguru Ji’s grace, I passed my NCLEX exam. Your encouragement, patience, and guidance always kept me strong and focused.'],
  ['Gurpreet', 'Verified student review', 'My exam got cleared and my dream came true because of your teaching. The exam shut off at 85 and everything you taught came in the exam.'],
  ['Nirmaljeet', 'Verified student review', 'Your support and encouragement meant a lot to me. You inspired me to believe in myself and keep going even during difficult times.'],
  ['Sajneet', 'Passed NCLEX-PN', 'I passed my PN NCLEX. The topics that weren’t clear even in college became clear because of your teaching and guidance.'],
  ['Simran', 'Passed RN and RPN', 'I cleared both RN and RPN exams. Your teaching made complex concepts easy and your motivational words helped me stay mentally strong.'],
  ['Jasmine', 'Passed NCLEX', 'Thank you so much. You taught not only NCLEX but also how to become a better person in life. Your motivation helped me a lot.'],
  ['Jagpreet', 'Verified student review', 'I passed my exam in first attempt. You are not only a teacher but also a motivational speaker. I learned many real-life lessons from your classes.'],
  ['Aman', 'Verified student review', 'Waheguru ji’s blessings and your team’s efforts helped me clear my exam in first attempt. Thank you so much for making this possible.'],
  ['Archana', 'Passed NCLEX-RN', 'I officially passed my NCLEX and became a Registered Nurse. You are not just a teacher but a mentor who prepared me for real-world nursing.'],
] as const;

function initialsFromName(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export const testimonials: Testimonial[] = testimonialRows.map(
  ([name, result, quote], index) => ({
    id: `t${String(index + 1).padStart(3, '0')}`,
    quote,
    name,
    result,
    initials: initialsFromName(name),
  })
);
