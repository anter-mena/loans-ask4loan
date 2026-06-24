'use client';

import { useEffect, useRef, useCallback, useMemo } from 'react';
import { toast } from 'sonner';
import { CheckCircle2 } from 'lucide-react';

const LoanApprovalToasts = () => {
  const toastCount = useRef(0);

  // 150+ varied messages - Canadian cities and names
  const approvalMessages = useMemo(() => [
    { name: "Christopher", city: "Winnipeg", province: "MB", amount: 3000, time: 23 },
    { name: "Andrew", city: "St. John's", province: "NL", amount: 5000, time: 27 },
    { name: "Brittany", city: "Mississauga", province: "ON", amount: 3500, time: 18 },
    { name: "Amanda", city: "Regina", province: "SK", amount: 3500, time: 4 },
    { name: "David", city: "Edmonton", province: "AB", amount: 1500, time: 21 },
    { name: "Sarah", city: "Vancouver", province: "BC", amount: 4500, time: 12 },
    { name: "Michael", city: "Toronto", province: "ON", amount: 2800, time: 8 },
    { name: "Jessica", city: "Calgary", province: "AB", amount: 4200, time: 15 },
    { name: "James", city: "Ottawa", province: "ON", amount: 3200, time: 31 },
    { name: "Emily", city: "Montreal", province: "QC", amount: 2500, time: 19 },
    { name: "Daniel", city: "Halifax", province: "NS", amount: 3800, time: 25 },
    { name: "Lauren", city: "Victoria", province: "BC", amount: 4000, time: 14 },
    { name: "Matthew", city: "Saskatoon", province: "SK", amount: 2200, time: 9 },
    { name: "Ashley", city: "Brampton", province: "ON", amount: 3300, time: 22 },
    { name: "Ryan", city: "Hamilton", province: "ON", amount: 2900, time: 17 },
    { name: "Jennifer", city: "London", province: "ON", amount: 3600, time: 11 },
    { name: "Brandon", city: "Kitchener", province: "ON", amount: 2700, time: 28 },
    { name: "Nicole", city: "Windsor", province: "ON", amount: 3100, time: 6 },
    { name: "Kevin", city: "Oshawa", province: "ON", amount: 2400, time: 20 },
    { name: "Melissa", city: "Gatineau", province: "QC", amount: 3900, time: 13 },
    { name: "Jason", city: "Vaughan", province: "ON", amount: 4100, time: 24 },
    { name: "Stephanie", city: "Markham", province: "ON", amount: 3400, time: 10 },
    { name: "Justin", city: "Longueuil", province: "QC", amount: 2600, time: 29 },
    { name: "Rachel", city: "Burnaby", province: "BC", amount: 4300, time: 16 },
    { name: "Tyler", city: "Richmond", province: "BC", amount: 3700, time: 7 },
    { name: "Samantha", city: "Laval", province: "QC", amount: 2300, time: 32 },
    { name: "Joshua", city: "Barrie", province: "ON", amount: 3000, time: 5 },
    { name: "Amber", city: "Abbotsford", province: "BC", amount: 2800, time: 26 },
    { name: "Kyle", city: "Coquitlam", province: "BC", amount: 3500, time: 18 },
    { name: "Courtney", city: "Kelowna", province: "BC", amount: 2100, time: 30 },
    { name: "Robert", city: "Thunder Bay", province: "ON", amount: 1800, time: 12 },
    { name: "Lisa", city: "Sudbury", province: "ON", amount: 2500, time: 23 },
    { name: "Eric", city: "Sault Ste. Marie", province: "ON", amount: 1900, time: 15 },
    { name: "Megan", city: "Sarnia", province: "ON", amount: 2700, time: 8 },
    { name: "Thomas", city: "Peterborough", province: "ON", amount: 2200, time: 19 },
    { name: "Kimberly", city: "Cambridge", province: "ON", amount: 3100, time: 11 },
    { name: "Patrick", city: "Guelph", province: "ON", amount: 2900, time: 27 },
    { name: "Rebecca", city: "Kingston", province: "ON", amount: 3300, time: 14 },
    { name: "Jonathan", city: "Waterloo", province: "ON", amount: 2400, time: 21 },
    { name: "Laura", city: "Brantford", province: "ON", amount: 2800, time: 9 },
    { name: "Steven", city: "Red Deer", province: "AB", amount: 3200, time: 25 },
    { name: "Alicia", city: "Lethbridge", province: "AB", amount: 2600, time: 17 },
    { name: "Mark", city: "Medicine Hat", province: "AB", amount: 1700, time: 31 },
    { name: "Christine", city: "Grande Prairie", province: "AB", amount: 3000, time: 6 },
    { name: "Nathan", city: "Airdrie", province: "AB", amount: 2500, time: 22 },
    { name: "Angela", city: "Fort McMurray", province: "AB", amount: 4500, time: 13 },
    { name: "Brian", city: "Kamloops", province: "BC", amount: 2300, time: 28 },
    { name: "Michelle", city: "Nanaimo", province: "BC", amount: 3400, time: 10 },
    { name: "Adam", city: "Prince George", province: "BC", amount: 2100, time: 24 },
    { name: "Heather", city: "Chilliwack", province: "BC", amount: 2700, time: 16 },
    { name: "Jordan", city: "Vernon", province: "BC", amount: 1900, time: 29 },
    { name: "Danielle", city: "Moose Jaw", province: "SK", amount: 1600, time: 7 },
    { name: "Nicholas", city: "Prince Albert", province: "SK", amount: 2000, time: 20 },
    { name: "Kayla", city: "Yorkton", province: "SK", amount: 1800, time: 32 },
    { name: "Benjamin", city: "Swift Current", province: "SK", amount: 2200, time: 5 },
    { name: "Lindsey", city: "Brandon", province: "MB", amount: 2400, time: 18 },
    { name: "Gregory", city: "Steinbach", province: "MB", amount: 2100, time: 26 },
    { name: "Morgan", city: "Portage la Prairie", province: "MB", amount: 1700, time: 12 },
    { name: "Jacob", city: "Thompson", province: "MB", amount: 2300, time: 23 },
    { name: "Katelyn", city: "Moncton", province: "NB", amount: 2800, time: 15 },
    { name: "Timothy", city: "Saint John", province: "NB", amount: 2500, time: 8 },
    { name: "Victoria", city: "Fredericton", province: "NB", amount: 2900, time: 19 },
    { name: "Cameron", city: "Dieppe", province: "NB", amount: 2200, time: 27 },
    { name: "Natalie", city: "Charlottetown", province: "PE", amount: 2600, time: 11 },
    { name: "Austin", city: "Summerside", province: "PE", amount: 1900, time: 30 },
    { name: "Taylor", city: "Dartmouth", province: "NS", amount: 3100, time: 14 },
    { name: "Alexis", city: "Sydney", province: "NS", amount: 2400, time: 21 },
    { name: "Zachary", city: "New Glasgow", province: "NS", amount: 2000, time: 9 },
    { name: "Hannah", city: "Truro", province: "NS", amount: 2300, time: 25 },
    { name: "Cody", city: "Corner Brook", province: "NL", amount: 2700, time: 17 },
    { name: "Brooke", city: "Mount Pearl", province: "NL", amount: 2500, time: 6 },
    { name: "Dylan", city: "Conception Bay South", province: "NL", amount: 2200, time: 22 },
    { name: "Madison", city: "Paradise", province: "NL", amount: 2800, time: 13 },
    { name: "Connor", city: "Whitehorse", province: "YT", amount: 3300, time: 28 },
    { name: "Olivia", city: "Yellowknife", province: "NT", amount: 3500, time: 10 },
    { name: "Emma", city: "Iqaluit", province: "NU", amount: 4000, time: 24 },
    { name: "William", city: "Sherbrooke", province: "QC", amount: 2600, time: 16 },
    { name: "Sophia", city: "Lévis", province: "QC", amount: 2900, time: 7 },
    { name: "Ethan", city: "Trois-Rivières", province: "QC", amount: 2400, time: 29 },
    { name: "Isabella", city: "Terrebonne", province: "QC", amount: 3200, time: 20 },
    { name: "Alexander", city: "Saguenay", province: "QC", amount: 2100, time: 32 },
    { name: "Ava", city: "Repentigny", province: "QC", amount: 2700, time: 5 },
    { name: "Mason", city: "Brossard", province: "QC", amount: 3000, time: 18 },
    { name: "Mia", city: "Drummondville", province: "QC", amount: 2300, time: 26 },
    { name: "Logan", city: "Saint-Jean-sur-Richelieu", province: "QC", amount: 2800, time: 12 },
    { name: "Charlotte", city: "Granby", province: "QC", amount: 2500, time: 23 },
    { name: "Lucas", city: "Blainville", province: "QC", amount: 3100, time: 15 },
    { name: "Amelia", city: "Mirabel", province: "QC", amount: 2600, time: 8 },
    { name: "Jacob", city: "Saint-Jérôme", province: "QC", amount: 2200, time: 19 },
    { name: "Harper", city: "Châteauguay", province: "QC", amount: 2900, time: 27 },
    { name: "Jackson", city: "Saint-Hyacinthe", province: "QC", amount: 2400, time: 11 },
    { name: "Evelyn", city: "Joliette", province: "QC", amount: 2100, time: 30 },
    { name: "Aiden", city: "Victoriaville", province: "QC", amount: 2000, time: 14 },
    { name: "Abigail", city: "Shawinigan", province: "QC", amount: 1800, time: 21 },
    { name: "Carter", city: "Sorel-Tracy", province: "QC", amount: 2300, time: 9 },
    { name: "Emily", city: "Val-d'Or", province: "QC", amount: 2700, time: 25 },
    { name: "Liam", city: "Timmins", province: "ON", amount: 1900, time: 17 },
    { name: "Grace", city: "North Bay", province: "ON", amount: 2400, time: 6 },
    { name: "Noah", city: "Belleville", province: "ON", amount: 2600, time: 22 },
    { name: "Chloe", city: "Cornwall", province: "ON", amount: 2200, time: 13 },
    { name: "Oliver", city: "Chatham", province: "ON", amount: 2500, time: 28 },
    { name: "Lily", city: "Pembroke", province: "ON", amount: 1700, time: 10 },
    { name: "Elijah", city: "Brockville", province: "ON", amount: 2300, time: 24 },
    { name: "Zoe", city: "Woodstock", province: "ON", amount: 2800, time: 16 },
    { name: "Henry", city: "Stratford", province: "ON", amount: 2100, time: 7 },
    { name: "Aria", city: "Owen Sound", province: "ON", amount: 2000, time: 29 },
    { name: "Sebastian", city: "Leamington", province: "ON", amount: 1900, time: 20 },
    { name: "Layla", city: "Orillia", province: "ON", amount: 2400, time: 32 },
    { name: "Jack", city: "Midland", province: "ON", amount: 2200, time: 5 },
    { name: "Ella", city: "Collingwood", province: "ON", amount: 2600, time: 18 },
    { name: "Owen", city: "Cobourg", province: "ON", amount: 2300, time: 26 },
    { name: "Avery", city: "Port Hope", province: "ON", amount: 1800, time: 12 },
    { name: "Gabriel", city: "Lindsay", province: "ON", amount: 2100, time: 23 },
    { name: "Scarlett", city: "Kawartha Lakes", province: "ON", amount: 2500, time: 15 },
    { name: "Samuel", city: "Niagara Falls", province: "ON", amount: 2900, time: 8 },
    { name: "Penelope", city: "St. Catharines", province: "ON", amount: 2700, time: 19 },
    { name: "Isaac", city: "Welland", province: "ON", amount: 2200, time: 27 },
    { name: "Riley", city: "Fort Erie", province: "ON", amount: 2400, time: 11 },
    { name: "Anthony", city: "Port Colborne", province: "ON", amount: 2000, time: 30 },
    { name: "Aubrey", city: "Grimsby", province: "ON", amount: 2600, time: 14 },
    { name: "Wyatt", city: "Stoney Creek", province: "ON", amount: 2800, time: 21 },
    { name: "Nora", city: "Burlington", province: "ON", amount: 3100, time: 9 },
    { name: "Grayson", city: "Oakville", province: "ON", amount: 3400, time: 25 },
    { name: "Camila", city: "Milton", province: "ON", amount: 3000, time: 17 },
    { name: "Jaxon", city: "Georgetown", province: "ON", amount: 2700, time: 6 },
    { name: "Victoria", city: "Orangeville", province: "ON", amount: 2500, time: 22 },
    { name: "Luke", city: "Alliston", province: "ON", amount: 2300, time: 13 },
    { name: "Stella", city: "Bradford", province: "ON", amount: 2800, time: 28 },
    { name: "Leo", city: "Newmarket", province: "ON", amount: 2900, time: 10 },
    { name: "Paisley", city: "Aurora", province: "ON", amount: 3200, time: 24 },
    { name: "Lincoln", city: "Richmond Hill", province: "ON", amount: 3500, time: 16 },
    { name: "Violet", city: "Thornhill", province: "ON", amount: 3100, time: 7 },
    { name: "Hunter", city: "Pickering", province: "ON", amount: 2800, time: 29 },
    { name: "Hazel", city: "Ajax", province: "ON", amount: 2600, time: 20 },
    { name: "Eli", city: "Whitby", province: "ON", amount: 3000, time: 32 },
    { name: "Bella", city: "Bowmanville", province: "ON", amount: 2400, time: 5 },
    { name: "Julian", city: "Clarington", province: "ON", amount: 2700, time: 18 },
    { name: "Aurora", city: "Port Perry", province: "ON", amount: 2200, time: 26 },
    { name: "Hudson", city: "Uxbridge", province: "ON", amount: 2500, time: 12 },
    { name: "Lucy", city: "Stouffville", province: "ON", amount: 2900, time: 23 },
    { name: "Maverick", city: "King City", province: "ON", amount: 3300, time: 15 },
    { name: "Anna", city: "Maple", province: "ON", amount: 3100, time: 8 },
    { name: "Ezra", city: "Concord", province: "ON", amount: 2800, time: 19 },
    { name: "Caroline", city: "Woodbridge", province: "ON", amount: 3000, time: 27 },
    { name: "Kai", city: "Bolton", province: "ON", amount: 2600, time: 11 },
    { name: "Sarah", city: "Caledon", province: "ON", amount: 2900, time: 30 },
    { name: "Axel", city: "Brampton West", province: "ON", amount: 3200, time: 14 },
    { name: "Claire", city: "Mississauga West", province: "ON", amount: 3400, time: 21 },
    { name: "Miles", city: "Etobicoke", province: "ON", amount: 3100, time: 9 },
    { name: "Skylar", city: "North York", province: "ON", amount: 3300, time: 25 },
  ], []);

  const showToast = useCallback(() => {
    const randomMessage = approvalMessages[Math.floor(Math.random() * approvalMessages.length)];

    toast.custom((toastId) => (
      <div
        className="approval-toast flex items-start gap-3 rounded-lg shadow-lg p-3.5 border w-full max-w-sm sm:max-w-md"
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: '#E5E7EB',
        }}
      >
        <div className="shrink-0">
          <div
            className="toast-icon-bg w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
          >
            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
          </div>
        </div>
        <div className="flex-1 pt-0.5 min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">
            {randomMessage.name} from {randomMessage.city}, {randomMessage.province}
          </p>
          <p className="text-sm text-gray-600 mt-0.5">
            Approved for ${randomMessage.amount.toLocaleString()}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {randomMessage.time} min ago
          </p>
        </div>
        <button
          onClick={() => toast.dismiss(toastId)}
          className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    ), {
      duration: 8000,
      position: 'bottom-left',
      style: {
        background: '#FFFFFF',
        border: '0px solid #E5E7EB',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        padding: 0,
        margin: 0,
      },
    });
  }, [approvalMessages]);

  useEffect(() => {
    // First toast after 10 seconds
    const firstTimeout = setTimeout(() => {
      showToast();
      toastCount.current = 1;

      // Subsequent toasts every 2 minutes
      const interval = setInterval(() => {
        showToast();
        toastCount.current += 1;
      }, 120000);

      return () => clearInterval(interval);
    }, 10000);

    return () => clearTimeout(firstTimeout);
  }, [showToast]);

  return null;
};

export default LoanApprovalToasts;
