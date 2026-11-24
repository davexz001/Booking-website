import { useEffect, useState } from 'react';
import { Check, Copy, Mail } from 'lucide-react';

interface ContactPageProps {
  initialServiceInterest?: string;
}

interface FormValues {
  fullName: string;
  email: string;
  bookTitle: string;
  genre: string;
  publishingStatus: string;
  country: string;
  bookLink: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

export function ContactPage({ initialServiceInterest }: ContactPageProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    email: '',
    bookTitle: '',
    genre: '',
    publishingStatus: '',
    country: '',
    bookLink: '',
    message: initialServiceInterest
      ? `Area of interest: ${initialServiceInterest}\n\nAbout my book and current visibility goals:\n`
      : '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedBrief, setSubmittedBrief] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!initialServiceInterest) return;
    setValues((prev) => {
      if (prev.message.trim().length > 0) return prev;
      return {
        ...prev,
        message: `Area of interest: ${initialServiceInterest}\n\nAbout my book and current visibility goals:\n`,
      };
    });
  }, [initialServiceInterest]);

  const updateField = (field: keyof FormValues, val: string) => {
    setValues((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!values.bookTitle.trim()) {
      nextErrors.bookTitle = 'Please enter your book title or working title.';
    }
    if (!values.genre.trim()) {
      nextErrors.genre = 'Please indicate your book’s genre or subject.';
    }
    if (!values.publishingStatus) {
      nextErrors.publishingStatus = 'Please select your publishing status.';
    }
    if (!values.country.trim()) {
      nextErrors.country = 'Please enter your country.';
    }
    if (values.bookLink.trim()) {
      try {
        const parsed = new URL(values.bookLink.trim());
        if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
          nextErrors.bookLink = 'Please enter a link starting with https:// or http://.';
        }
      } catch {
        nextErrors.bookLink = 'Please enter a valid web address including https://.';
      }
    }
    if (!values.message.trim() || values.message.trim().length < 15) {
      nextErrors.message =
        'Please share a short note about your book and what visibility questions you have.';
    }

    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formatted = [
      'BOOK MARKETING ENQUIRY — BECKY RONALD',
      '----------------------------------------',
      `Full Name: ${values.fullName.trim()}`,
      `Email: ${values.email.trim()}`,
      `Book Title: ${values.bookTitle.trim()}`,
      `Genre: ${values.genre.trim()}`,
      `Publishing Status: ${values.publishingStatus}`,
      `Country: ${values.country.trim()}`,
      `Website or Amazon Book Link: ${values.bookLink.trim() || 'Not provided'}`,
      '',
      'Message:',
      values.message.trim(),
    ].join('\n');

    setSubmittedBrief(formatted);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!submittedBrief) return;
    try {
      await navigator.clipboard.writeText(submittedBrief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const mailtoHref = submittedBrief
    ? `mailto:?subject=${encodeURIComponent(
        `Book Marketing Enquiry: ${values.bookTitle.trim()} (${values.fullName.trim()})`
      )}&body=${encodeURIComponent(submittedBrief)}`
    : '#';

  return (
    <div>
      {/* Page Banner */}
      <section className="border-b border-stone-200/80 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
              Enquiries
            </p>
            <h1 className="font-serif text-4xl text-[#162231] sm:text-5xl">
              Let’s Start With Your Book.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#585f69] sm:text-lg">
              Every book has different readers, challenges and opportunities. Tell me a little about
              your work, and let’s explore what could help it reach the right audience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Guidance */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-12">
          <aside className="space-y-6 lg:col-span-5">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
                What Helps Most
              </p>
              <h2 className="font-serif text-3xl text-[#162231]">Sharing Context About Your Work</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#585f69] sm:text-base">
                To offer thoughtful initial observations, it is helpful to understand what kind of
                book you have written, your publishing status, and where the book currently appears
                online.
              </p>
            </div>

            <div className="space-y-4 border-y border-stone-200 py-6 text-sm text-[#272d35]">
              <div>
                <h3 className="font-sans text-sm font-semibold text-[#162231]">
                  International Authors Welcome
                </h3>
                <p className="mt-1 text-[#585f69]">
                  Enquiries are welcomed from writers and independent publishers in any country.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold text-[#162231]">
                  All Publishing Arrangements
                </h3>
                <p className="mt-1 text-[#585f69]">
                  Traditionally published, self-published, small press, upcoming release, or
                  backlist titles.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold text-[#162231]">
                  Clear Email-Based Delivery
                </h3>
                <p className="mt-1 text-[#585f69]">
                  Submitting this form validates your details and prepares a structured enquiry
                  brief ready to send via your email client or copy directly into a message.
                </p>
              </div>
            </div>
          </aside>

          <div className="rounded-md border border-stone-200/90 bg-white p-7 sm:p-10 lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#162231]"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    value={values.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    className="mt-2 w-full rounded-sm border border-stone-300 bg-[#faf7f2] px-3.5 py-2.5 text-sm text-[#162231] focus:border-[#162231] focus:bg-white focus:outline-none"
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs font-medium text-[#8f2323]">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#162231]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="mt-2 w-full rounded-sm border border-stone-300 bg-[#faf7f2] px-3.5 py-2.5 text-sm text-[#162231] focus:border-[#162231] focus:bg-white focus:outline-none"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs font-medium text-[#8f2323]">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="bookTitle"
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#162231]"
                  >
                    Book Title
                  </label>
                  <input
                    id="bookTitle"
                    type="text"
                    value={values.bookTitle}
                    onChange={(e) => updateField('bookTitle', e.target.value)}
                    className="mt-2 w-full rounded-sm border border-stone-300 bg-[#faf7f2] px-3.5 py-2.5 text-sm text-[#162231] focus:border-[#162231] focus:bg-white focus:outline-none"
                  />
                  {errors.bookTitle && (
                    <p className="mt-1.5 text-xs font-medium text-[#8f2323]">{errors.bookTitle}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="genre"
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#162231]"
                  >
                    Genre
                  </label>
                  <input
                    id="genre"
                    type="text"
                    placeholder="e.g. Literary Fiction, Poetry, History"
                    value={values.genre}
                    onChange={(e) => updateField('genre', e.target.value)}
                    className="mt-2 w-full rounded-sm border border-stone-300 bg-[#faf7f2] px-3.5 py-2.5 text-sm text-[#162231] focus:border-[#162231] focus:bg-white focus:outline-none"
                  />
                  {errors.genre && (
                    <p className="mt-1.5 text-xs font-medium text-[#8f2323]">{errors.genre}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="publishingStatus"
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#162231]"
                  >
                    Publishing Status
                  </label>
                  <select
                    id="publishingStatus"
                    value={values.publishingStatus}
                    onChange={(e) => updateField('publishingStatus', e.target.value)}
                    className="mt-2 w-full rounded-sm border border-stone-300 bg-[#faf7f2] px-3.5 py-2.5 text-sm text-[#162231] focus:border-[#162231] focus:bg-white focus:outline-none"
                  >
                    <option value="">Select publishing status...</option>
                    <option value="Traditionally Published">Traditionally Published</option>
                    <option value="Self-Published / Independent">
                      Self-Published / Independent
                    </option>
                    <option value="Independent Press">Independent Press</option>
                    <option value="Preparing for Publication">Preparing for Publication</option>
                    <option value="Backlist / Re-positioning">Backlist / Re-positioning</option>
                  </select>
                  {errors.publishingStatus && (
                    <p className="mt-1.5 text-xs font-medium text-[#8f2323]">
                      {errors.publishingStatus}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#162231]"
                  >
                    Country
                  </label>
                  <input
                    id="country"
                    type="text"
                    autoComplete="country-name"
                    value={values.country}
                    onChange={(e) => updateField('country', e.target.value)}
                    className="mt-2 w-full rounded-sm border border-stone-300 bg-[#faf7f2] px-3.5 py-2.5 text-sm text-[#162231] focus:border-[#162231] focus:bg-white focus:outline-none"
                  />
                  {errors.country && (
                    <p className="mt-1.5 text-xs font-medium text-[#8f2323]">{errors.country}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="bookLink"
                  className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#162231]"
                >
                  Website or Amazon Book Link{' '}
                  <span className="font-normal lowercase text-[#585f69]">(optional)</span>
                </label>
                <input
                  id="bookLink"
                  type="url"
                  placeholder="https://..."
                  value={values.bookLink}
                  onChange={(e) => updateField('bookLink', e.target.value)}
                  className="mt-2 w-full rounded-sm border border-stone-300 bg-[#faf7f2] px-3.5 py-2.5 text-sm text-[#162231] focus:border-[#162231] focus:bg-white focus:outline-none"
                />
                {errors.bookLink && (
                  <p className="mt-1.5 text-xs font-medium text-[#8f2323]">{errors.bookLink}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#162231]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me a little about your book, its intended readers, and what visibility goals or challenges you are exploring..."
                  value={values.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  className="mt-2 w-full rounded-sm border border-stone-300 bg-[#faf7f2] px-3.5 py-2.5 text-sm text-[#162231] focus:border-[#162231] focus:bg-white focus:outline-none"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs font-medium text-[#8f2323]">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="cursor-pointer rounded-sm bg-[#162231] px-6 py-3.5 text-sm font-semibold text-[#faf7f2] transition-colors hover:bg-[#23344a]"
              >
                Prepare &amp; Submit Enquiry
              </button>
            </form>

            {submittedBrief && (
              <div
                role="status"
                aria-live="polite"
                className="mt-8 rounded-md border border-[#b38e4c] bg-[#faf7f2] p-6"
              >
                <h3 className="font-serif text-2xl text-[#162231]">
                  Your Book Enquiry Brief Is Ready
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#272d35]">
                  Thank you, {values.fullName.trim()}. Because this static consultancy site does not
                  store author enquiries in a third-party database, your validated enquiry brief has
                  been prepared below for direct email correspondence or clipboard copy.
                </p>

                <pre className="mt-4 overflow-x-auto rounded-sm border border-stone-200 bg-white p-4 font-mono text-xs leading-relaxed text-[#272d35] whitespace-pre-wrap">
                  {submittedBrief}
                </pre>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 rounded-sm bg-[#162231] px-4 py-2.5 text-xs font-semibold text-[#faf7f2] transition-colors hover:bg-[#23344a]"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Open in Email Client
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-sm border border-stone-300 bg-white px-4 py-2.5 text-xs font-semibold text-[#162231] transition-colors hover:border-[#162231]"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? 'Enquiry Brief Copied' : 'Copy Enquiry Brief'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
