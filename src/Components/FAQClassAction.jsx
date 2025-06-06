import React, { useState } from 'react'

function FaqClassAction() {
  const faqItems = [
    {
      id: 1,
      question: 'What is rideshare class action about?',
      answer: 'This class action seeks compensation for drivers who were denied workplace rights and for passengers who experienced harm or safety failures during a rideshare trip.',
      category: 'law',
      expanded: false
    },
    {
      id: 2,
      question: 'I stopped driving years ago can I still join?',
      answer: 'Yes. Even if you’re no longer active, you may still be eligible if you were affected during the time covered by the class action.',
      category: 'law',
      expanded: false
    },
    {
      id: 3,
      question: 'What if I drove to multiple platforms like Uber and Ola?',
      answer: 'You may still qualify. Legal experts will assess your eligibility across all relevant platforms you worked with during the claim period.',
      category: 'law',
      expanded: false
    },
    {
      id: 4,
      question: 'Can passengers really join a class action too?',
      answer: 'Yes. If you experienced unsafe rides, harassment, or your complaints were mishandled, you may be eligible to participate as a passenger.',
      category: 'law',
      expanded: false
    },
    {
      id: 5,
      question: 'Will I need to go to court?',
      answer: 'Not usually. Most class actions settle out of court. If you qualify, your claim will be handled as part of a group, and you’ll be kept informed at every step.',
      category: 'law',
      expanded: false
    }
    ,
    {
      id: 6,
      question: "What kind of compensation could I receive?",
      answer: "Compensation may include unpaid super, leave entitlements, reimbursement for work expenses, and damages for stress or safety-related harm.",
      category: 'law',
      expanded: false
    }
  ];

  // State management
  const [selectedCategory, setSelectedCategory] = useState('law');
  const [expandedItems, setExpandedItems] = useState(
    faqItems.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {})
  );

  // Toggle FAQ item expansion
  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter FAQ items by selected category
  const filteredItems = selectedCategory
    ? faqItems.filter(item => item.category === selectedCategory)
    : faqItems;

  return (
    <section className="py-1 bg-[#023437] font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            {/* Title Section - Moves to top on mobile */}
            <div className="lg:w-1/3">
              <h2
                className="text-[#C09F53] font-georgia italic text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[120px] font-normal leading-tight lg:leading-normal text-left mb-4 lg:mb-0"
                style={{ fontFeatureSettings: "'dlig' on" }}
              >
                FAQ
              </h2>
              <p
                className="text-white text-lg sm:text-xl font-semibold leading-normal mb-6 lg:mb-0"
                style={{ fontFamily: '"Open Sans", sans-serif' }}
              >
                Need Clarity?<br />
                We've Got You Covered.
              </p>
            </div>

            {/* FAQ Items Section */}
            <div className="lg:w-2/3">
              <div className="bg-[#023437] rounded-lg lg:rounded-xl w-full">
                <div className="relative z-10">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                      <div key={item.id} className={`py-3 sm:py-4 ${expandedItems[item.id] ? 'expanded' : ''}`}>
                        {index > 0 && <div className="h-px bg-[#ffffff] opacity-20 my-2 sm:my-3"></div>}
                        <div 
                          className="flex items-start cursor-pointer" 
                          onClick={() => toggleItem(item.id)}
                        >
                          <button
                            className={`w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 p-0 mr-3 sm:mr-4 transition-all duration-200 ${expandedItems[item.id] ? 'rotate-0' : ''}`}
                            aria-label="Toggle answer"
                          >
                            <div className="relative w-6 h-6 sm:w-8 sm:h-8 block">
                              <span
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-6 sm:h-8 bg-[#C09F53] transition-opacity duration-200"
                                style={{ opacity: expandedItems[item.id] ? 0 : 1 }}
                              ></span>
                              <span className="absolute top-1/2 left-0 -translate-y-1/2 w-6 sm:w-8 h-1 bg-[#C09F53]"></span>
                            </div>
                          </button>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                              {item.question}
                            </h3>
                            {expandedItems[item.id] && (
                              <div className="pt-3 sm:pt-4 animate-fadeIn">
                                <p className="text-base sm:text-lg text-white opacity-80 leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-10 text-center">
                      <p className="text-lg sm:text-xl text-gray-500">No questions found for this category.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqClassAction