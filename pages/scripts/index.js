import React, { useEffect } from 'react';

const ScriptsPage = () => {
   useEffect(() => {
       // Setup materialize components
       const initializeMaterialize = () => {
           var modals = document.querySelectorAll(".modal");
           M.Modal.init(modals);

           var items = document.querySelectorAll(".collapsible");
           M.Collapsible.init(items);
       };

       if (document.readyState === 'loading') {
           document.addEventListener('DOMContentLoaded', initializeMaterialize);
       } else {
           initializeMaterialize();
       }

       return () => {
           document.removeEventListener('DOMContentLoaded', initializeMaterialize);
       };
   }, []);

   return (
       <div>
           <h1>Scripts Page</h1>
           <div className="modal">...</div>
           <ul className="collapsible">...</ul>
       </div>
   );
};

export default ScriptsPage;
