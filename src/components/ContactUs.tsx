import assets from '../assets/assets';
import Title from './Title';
import toast from 'react-hot-toast';
import { motion } from 'motion/react';

const ContactUs = () => {
  interface FormSubmitResponse {
    success: boolean;
    message?: string;
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    formData.append('access_key', '6cb06abe-6d59-46a8-87d6-36cb99ce1074');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data: FormSubmitResponse = await response.json();

      if (data.success) {
        toast.success('Thank you for your submission!');
        event.target.reset();
      } else {
        toast.error(data.message || 'An error occurred');
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      id='contact-us'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Title
        title='Reach out to us'
        desc='Ready to grow your brand? Let’s connect and build something exceptional together.'
      />
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onSubmit={onSubmit}
        className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'
      >
        <div>
          <p className='md-2 text-sm font-medium'>Your name</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.person_icon} alt='person icon' />
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              className='w-full p-3 text-sm outline-none'
              required
            />
          </div>
        </div>
        <div>
          <p className='md-2 text-sm font-medium'>Email id</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.email_icon} alt='email icon' />
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              className='w-full p-3 text-sm outline-none'
              required
            />
          </div>
        </div>
        <div className='sm:col-span-2'>
          <p className='md-2 text-sm font-medium'>Message</p>
          <textarea
            rows={8}
            name='message'
            placeholder='Enter your message'
            className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'
            required
          />
        </div>
        <button
          type='submit'
          className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'
        >
          Send Message{' '}
          <img src={assets.arrow_icon} alt='arrow icon' className='w-4' />
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
