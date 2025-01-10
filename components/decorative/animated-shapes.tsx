"use client";

export function AnimatedShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 左上の装飾 */}
      <div className="absolute -top-20 -left-20 w-96 h-96 animate-float-slow">
        <svg
          className="w-full h-full text-tarot-teal/10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M45.3,-59.1C58.9,-51.1,70.3,-37.4,75.6,-21.3C80.9,-5.2,80.2,13.3,73.2,28.8C66.2,44.4,52.9,57,37.6,63.7C22.3,70.4,5,71.2,-12.2,68.7C-29.4,66.2,-46.5,60.4,-58.4,48.8C-70.3,37.2,-77,19.8,-77.1,2.3C-77.2,-15.2,-70.7,-30.5,-59.8,-39.9C-48.9,-49.3,-33.6,-52.8,-19.7,-60.6C-5.8,-68.4,6.7,-80.5,21.5,-79.1C36.3,-77.7,53.3,-62.8,45.3,-59.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* 右上の装飾 */}
      <div className="absolute -top-10 right-0 w-72 h-72 animate-float-normal">
        <svg
          className="w-full h-full text-tarot-orange/10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M38.1,-47.8C47.6,-40.9,52.8,-27.8,57.1,-13.5C61.4,0.8,64.8,16.2,59.8,27.8C54.8,39.4,41.4,47.1,27.4,51.2C13.4,55.3,-1.2,55.8,-12.9,50.6C-24.6,45.4,-33.3,34.5,-42.4,22.7C-51.5,10.9,-61,-1.8,-60.2,-14C-59.4,-26.2,-48.3,-37.9,-35.8,-44.1C-23.3,-50.3,-9.3,-51,2.8,-54.3C14.9,-57.6,29.7,-63.5,38.1,-47.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* 中央の装飾 */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 animate-float-fast">
        <svg
          className="w-full h-full text-tarot-purple/10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M54.6,-67.1C69.8,-55.3,80.5,-37,82.7,-17.8C84.9,1.4,78.6,21.4,67.8,37.5C57,53.6,41.6,65.8,24.1,71.9C6.6,78,-13,78,-29.4,71.1C-45.8,64.2,-59,50.4,-68.2,33.5C-77.4,16.6,-82.6,-3.4,-77.8,-20.1C-73,-36.8,-58.2,-50.2,-42.4,-61.8C-26.6,-73.4,-9.8,-83.2,5.9,-90.2C21.7,-97.2,43.3,-101.4,54.6,-67.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
}