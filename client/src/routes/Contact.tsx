import axios from 'axios';
import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FaPaperPlane } from 'react-icons/fa';
import { FormValues } from '../types/FormValues'; // Import the type

const API_URL = import.meta.env.VITE_API_BASE_URL + '/api/contacts';

const Contact: React.FC = () => {
  // Form validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values: FormValues, { resetForm, setSubmitting, setStatus }: FormikHelpers<FormValues>) => {
      try {
        await axios.post(`${API_URL}`, {
          data: values,
        });
        resetForm();
        setStatus({ success: true });
      } catch (error) {
        console.error('Error sending message:', error);
        setStatus({ error: 'Failed to send message. Please try again.' });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="w-full space-y-8 px-4 sm:px-8 py-8 mt-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-2 text-blue-400">Get In Touch</h1>
        <p className="text-center text-lg sm:text-xl text-gray-300 mb-6">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <div className="bg-gray-700 p-6 rounded-lg">
          {formik.status?.success && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {formik.status?.error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">{formik.status.error}</div>
          )}
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="mt-1 text-sm text-red-400">{formik.errors.name}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-sm text-red-400">{formik.errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {formik.touched.subject && formik.errors.subject && (
                <p className="mt-1 text-sm text-red-400">{formik.errors.subject}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <p className="mt-1 text-sm text-red-400">{formik.errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
            >
              {formik.isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
