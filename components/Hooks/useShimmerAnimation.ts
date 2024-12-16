import React, { useEffect } from "react";

export const useShimmerAnimation = () => {
    useEffect(() => {
        const styles = `
          .shimmer-effect {
            position: relative;
            overflow: hidden;
          }
    
          .shimmer-effect::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%);
            transform: translateX(-100%);
            animation: shimmer 4s infinite;
          }
    
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `;
    
        // Inject styles into the document head on the client side
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
    
        return () => {
          // Clean up the injected styles when the component unmounts
          document.head.removeChild(styleSheet);
        };
      }, []);
}