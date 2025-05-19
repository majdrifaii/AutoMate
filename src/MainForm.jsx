// App.jsx
import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Step1({ meetingType, setMeetingType, setCurrentStep, meetingTypes }) {
  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold">Choose Meeting Type</h2>
      <div className="space-y-2">
        {meetingTypes.map((type, idx) => (
          <button
            key={idx}
            className={`block w-full border p-2 rounded text-left transition hover:bg-slate-100 ${
              meetingType.name === type.name ? 'bg-[#006699] text-white' : 'bg-white'
            }`}
            onClick={() => {
              setMeetingType(type);
              setCurrentStep(2);
            }}
          >
            {type.name}
          </button>
        ))}
      </div>
    </div>
  );
}



function Step2({ calendarDays, selectedDate, setSelectedDate, setCurrentStep, handlePrevMonth, handleNextMonth, currentMonth, currentYear }) {
  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold">Select Date:</h2>
      <div className="flex justify-between items-center mb-3">
        <button onClick={handlePrevMonth} className="px-3 py-1 border rounded">Prev</button>
        <span className="font-medium">{monthName}</span>
        <button onClick={handleNextMonth} className="px-3 py-1 border rounded">Next</button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((day, idx) => (
          <button
            key={idx}
            disabled={day.disabled}
            className={`p-2 border rounded ${day.disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'} ${selectedDate?.getDate() === day.day && !day.disabled ? 'bg-[#006699] text-[#006699] border-2' : ''}`}
            onClick={() => {
              setSelectedDate(day.date);
              setCurrentStep(3);
            }}
          >
            {day.day || ''}
          </button>
        ))}
      </div>
    </div>
  );
}



function Step3({ selectedDate, timeSlots, selectedTime, setSelectedTime, formData, handleFormChange, handleSubmit, isLoading }) {
  const formattedDate = selectedDate?.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold">Select Time:</h2>
      <p className="mb-2 text-sm text-gray-600">Date: {formattedDate}</p>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {timeSlots.map((slot, idx) => (
          <button
            key={idx}
            disabled={slot.disabled}
            className={`p-2 border rounded text-sm ${slot.disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'} ${selectedTime === slot.time ? 'border-[#006699] text-[#006699] border-2' : ''}`}
            onClick={() => setSelectedTime(slot.time)}
          >
            {slot.time}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="firstName" placeholder="First Name" className="w-full border p-2 rounded" onChange={handleFormChange} value={formData.firstName} required />
        <input type="text" name="lastName" placeholder="Last Name" className="w-full border p-2 rounded" onChange={handleFormChange} value={formData.lastName} required />
        <input type="email" name="email" placeholder="Email" className="w-full border p-2 rounded" onChange={handleFormChange} value={formData.email} required />
        <input type="tel" name="phone" placeholder="Phone" className="w-full border p-2 rounded" onChange={handleFormChange} value={formData.phone} required />
        <textarea name="notes" placeholder="Notes (optional)" className="w-full border p-2 rounded" onChange={handleFormChange} value={formData.notes} />
        <button type="submit" className="bg-[#006699] text-white p-2 rounded w-full hover:bg-[#0177aa]" disabled={isLoading}>{isLoading ? 'Booking...' : 'Book Appointment'}</button>
      </form>
    </div>
  );
}


function Step4({ bookingData, resetBooking, setCurrentStep }) {
  if (
    !bookingData ||
    Object.keys(bookingData).length === 0 ||
    Object.entries(bookingData).some(([key, value]) => 
      key !== 'notes' && (value === null || value === undefined || value === '')
    )
  ) {
    alert('Please fill out the form');
    setCurrentStep(3);
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
      <p className="mb-4 text-green-600">Your booking has been saved successfully.</p>
      <div className="border mt-4 p-4 text-left flex flex-col space-y-4 justify-center items-center bg-gray-50 rounded-md shadow-md">
        <p><strong>Name:</strong> {bookingData.firstName} {bookingData.lastName}</p>
        <p><strong>Meeting Type:</strong> {bookingData.meetingType}</p>
        <p><strong>Date:</strong> {bookingData.date}</p>
        <p><strong>Time:</strong> {bookingData.time}</p>
        <p><strong>Phone:</strong> {bookingData.phone}</p>
      </div>
      <button onClick={resetBooking} className="mt-6 w-full bg-[#006699] text-white p-2 rounded hover:bg-[#0177aa] cursor-pointer">Book Another</button>
      <Link to={'/'} className="block mt-6 w-full border-2 border-[#006699] text-[#006699] p-2 rounded">Go to Home</Link>
    </div>
  );
}

function MultiProgressBar({ totalSteps, currentStep, steps, setCurrentStep }){
    const goToStep = (step) => {
    // Only allow going to completed steps or the next step
    if (step <= currentStep || step === currentStep + 1) {
      setCurrentStep(step);
    }
  };

  return (
     <div className="mb-12" role="navigation" aria-label="Form progress">
            <div className="relative">
              {/* Progress line */}
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="h-0.5 w-full bg-gray-200">
                  <div
                    className="h-0.5 bg-[#006699] transition-all duration-300 ease-in-out"
                    style={{
                      width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Step indicators */}
              <div className="relative flex justify-between">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => goToStep(step.id)}
                    className={`cursor-pointer flex flex-col items-center ${step.id <= currentStep ? "cursor-pointer" : "cursor-not-allowed"}`}
                    disabled={step.id > currentStep + 1}
                    aria-current={step.id === currentStep ? "step" : undefined}
                    aria-label={`${step.label}, ${step.id < currentStep ? "completed" : step.id === currentStep ? "current" : "upcoming"} step ${step.id} of ${totalSteps}`}
                  >
                    <div
                      className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 ease-in-out
                      ${
                        step.id < currentStep
                          ? "border-[#006699] bg-[#006699] text-white"
                          : step.id === currentStep
                            ? "border-[#006699] bg-white text-[#006699]"
                            : "border-gray-300 bg-white text-gray-400"
                      }`}
                    >
                      {step.id < currentStep ? (
                        <FaCheck aria-hidden="true" />
                      ) : (
                        <span>{step.id}</span>
                      )}
                    </div>
                    <div
                      className={`mt-2 text-sm font-medium ${
                        step.id === currentStep
                          ? "text-[#006699"
                          : step.id < currentStep
                            ? "text-gray-900"
                            : "text-gray-500"
                      }`}
                    >
                      {step.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
  )
}




function MainForm() {
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxyJv5NO7Yxom28cBY6lqPRlyhes3Qq75b5a6tJh1tmCSpa5HNBFIoUflmkK9dKsCwb4w/exec";

  const [currentStep, setCurrentStep] = useState(1);
  const [meetingType, setMeetingType] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingData, setBookingData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [calendarDays, setCalendarDays] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const meetingTypes = [
    { name: 'Consultation' },
    { name: 'Technical Support' },
    { name: 'Follow-up' }
  ];

  useEffect(() => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const days = [];
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push({ day: null, disabled: true });
    }
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const dateObj = new Date(currentYear, currentMonth, day);
      days.push({
        day,
        disabled: dateObj < new Date().setHours(0, 0, 0, 0),
        date: dateObj
      });
    }
    setCalendarDays(days);
  }, [currentMonth, currentYear]);

  useEffect(() => {
    if (selectedDate) {
      const slots = [];
      for (let hour = 9; hour < 17; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          const timeString = `${hour % 12 || 12}:${minute.toString().padStart(2, '0')} ${hour >= 12 ? 'PM' : 'AM'}`;
          const isBooked = Math.random() > 0.7;
          slots.push({ time: timeString, disabled: isBooked });
        }
      }
      setTimeSlots(slots);
    }
  }, [selectedDate]);

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    if (currentMonth === 0) setCurrentYear(currentYear - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    if (currentMonth === 11) setCurrentYear(currentYear + 1);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !selectedTime){alert('Please fill in all required fields, including meeting type.'); return};
    setIsLoading(true);
    try {
      // await fetch(GOOGLE_SCRIPT_URL, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...formData,
      //     meetingType: meetingType?.name,
      //     date: selectedDate.toLocaleDateString('en-US'),
      //     time: selectedTime,
      //     notes: formData.notes || "No notes provided"
      //   })
      // });
      setBookingData({
        ...formData,
        meetingType: meetingType?.name,
        date: selectedDate.toLocaleDateString('en-US', {
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        }),
        time: selectedTime
      });
      setCurrentStep(4);
    } catch (err) {
      console.error(err);
      alert("Error saving booking. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

   const steps = [
    { id: 1, label: "Meeting Type" },
    { id: 2, label: "Date" },
    { id: 3, label: "Time & Info" },
    { id: 4, label: "Confirmation" },
  ];

  const resetBooking = () => {
    setCurrentStep(1);
    setMeetingType('');
    setSelectedDate(null);
    setSelectedTime(null);
    setBookingData({});
    setFormData({ firstName: '', lastName: '', email: '', phone: '', notes: '' });
  };

  return (
    <div className="p-6 pt-30 max-w-xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4">Appointment Booking</h1>
      <MultiProgressBar totalSteps={totalSteps} currentStep={currentStep} steps={steps} setCurrentStep={setCurrentStep} />
      {currentStep === 1 && <Step1 meetingType={meetingType} setMeetingType={setMeetingType} setCurrentStep={setCurrentStep} meetingTypes={meetingTypes} />}
      {currentStep === 2 && <Step2 calendarDays={calendarDays} selectedDate={selectedDate} setSelectedDate={setSelectedDate} setCurrentStep={setCurrentStep} handlePrevMonth={handlePrevMonth} handleNextMonth={handleNextMonth} currentMonth={currentMonth} currentYear={currentYear} />}
      {currentStep === 3 && <Step3 selectedDate={selectedDate} timeSlots={timeSlots} selectedTime={selectedTime} setSelectedTime={setSelectedTime} formData={formData} handleFormChange={handleFormChange} handleSubmit={handleSubmit} isLoading={isLoading} />}
      {currentStep === 4 && <Step4 bookingData={bookingData} resetBooking={resetBooking} setCurrentStep={setCurrentStep} />}
    </div>
  );
}

export default MainForm;
