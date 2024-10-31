'use client';

import axios from 'axios'; // Import Axios
import { useState, useEffect } from 'react';
import BasicLayout from '../components/BasicLayout'; // Adjust path as necessary
import FadeInSection from '../components/FadeInSection';
import { motion } from 'framer-motion';
import { ArrowRight, DollarSign } from 'lucide-react';

type DonationInfo = {
  id: number;
  description: string;
  name: string;
  amount: number;
  currency: string;
  orangemoneyname: string;
  orangemoneynumber: string;
  mtnmoneyname: string;
  mtnmoneynumber: string;
};

export default function Donate() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [donationInfo, setDonationInfo] = useState<DonationInfo[]>([]); // Handle multiple entries

  // Fetch donation info from the Strapi API
  useEffect(() => {
    const fetchDonationInfo = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
        const fetchUrl = `${apiUrl}/api/articles`;
  
        console.log("Fetching URL:", fetchUrl);
  
        const response = await axios.get(fetchUrl, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true, // Allows cookies and credentials
        });
  
        setDonationInfo(response.data.data);
      } catch (error) {
        console.error('Error fetching donation info:', error);
      }
    };
  
    fetchDonationInfo();
  }, []);
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Donation received: ${name} donated ${currency} ${amount}`);
    setIsSubmitted(true);
  };

  return (
    <BasicLayout>
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-4xl font-bold mb-10 text-center text-green-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Support Our Mission
            </motion.h1>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-r pr-8">
                  <h2 className="text-2xl font-semibold mb-4 text-green-700">
                    Please use this information to make your donation
                  </h2>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    {donationInfo.length > 0 ? (
                      donationInfo.map((info) => (
                        <div key={info.id} className="mb-4">
                          <p><strong>Description:</strong> {info.description}</p>
                          <p><strong>Name:</strong> {info.name}</p>
                          <p><strong>Amount:</strong> {info.amount} {info.currency}</p>
                          <p><strong>MTN Money Name:</strong> {info.mtnmoneyname}</p>
                          <p><strong>MTN Money #:</strong> {info.mtnmoneynumber}</p>
                          <p><strong>Orange Money Name:</strong> {info.orangemoneyname}</p>
                          <p><strong>Orange Money #:</strong> {info.orangemoneynumber}</p>
                        </div>
                      ))
                    ) : (
                      <p>Loading donation information...</p>
                    )}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-green-700">
                    Please input your name and the amount you donated for a personalized thank you message.
                  </h2>
                  {!isSubmitted ? (
                    <motion.form 
                      onSubmit={handleSubmit} 
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div>
                        <label htmlFor="name" className="block mb-1 font-medium">Donor's Name:</label>
                        <input
                          type="text"
                          id="name"
                          name="name" 
                          autoComplete="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="amount" className="block mb-1 font-medium">Amount Donated:</label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="number"
                            id="amount"
                            name="amount" 
                            autoComplete="transaction-amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full p-2 pl-8 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter the donation amount"
                            required
                          />
                          <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-md px-2 py-1"
                          >
                            <option value="USD">USD</option>
                            <option value="LRD">LRD</option>
                          </select>
                        </div>
                      </div>
                      <button 
                        type="submit" 
                        className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 flex items-center justify-center"
                      >
                        Submit <ArrowRight className="ml-2" />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-xl font-semibold mb-2 text-green-600">Thank You for Your Donation!</h3>
                      <p>We appreciate your generosity, {name}. Your contribution of {currency} {amount} will make a significant impact on our mission.</p>
                      <p className="mt-4">We'll be sending you a personalized thank you note soon.</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </BasicLayout>
  );
}
