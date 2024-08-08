'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import useAccordion from '@/components/hooks/useAccordion';

function Home_2() {
  const [activeIndex, handleAccordion] = useAccordion(0);
  const swiperRef = useRef(null);

  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Hero Section Start :::... */}
        <section id='hero-section'>
          <div className='relative overflow-hidden bg-black text-white'>
            {/* Section Spacer */}
            <div className='pb-28 pt-28 md:pb-40 lg:pt-28 xl:pb-[90px] xl:pt-[122px]'>
              {/* Section Container */}
              <div className='global-container'>
                <div className='grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,_1fr)_0.7fr]'>
                  {/* Hero Content */}
                  <div>
                    <h1 className='jos mb-6 max-w-md break-words font-clashDisplay text-5xl font-medium leading-none text-white md:max-w-full md:text-6xl lg:text-7xl xl:text-8xl xxl:text-[100px]'>
                      Enhance your communication skills with AI
                    </h1>
                    <p className='jos mb-11'>
                      Meet your customers on the most popular messaging channels
                      with an AI chatbot. It understands the customer
                      experience. Our AI chatbot benefits users by providing
                      instant support, 24/7 availability, and efficient response
                      to queries.
                    </p>
                    <Link
                      rel='noopener noreferrer'
                      href='https://www.example.com'
                      className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[18px] text-white after:bg-colorOrangyRed hover:text-white'
                    >
                      Start Chatting for Free
                      <Image
                        src='/assets/img_placeholder/th-2/icon-white-long-arrow-right.svg'
                        alt='icon-white-long-arrow-right'
                        width={24}
                        height={24}
                      />
                    </Link>
                  </div>
                  {/* Hero Content */}
                  {/* Hero Image */}
                  <div className='hero-img animate-pulse overflow-hidden rounded-2xl bg-black text-right'>
                    <Image
                      src='/assets/img_placeholder/th-2/hero-img-2.png'
                      alt='hero-img-2'
                      width={1296}
                      height={640}
                      className='h-auto w-full'
                    />
                  </div>
                  {/* Hero Image */}
                </div>
              </div>
              {/* Section Container */}
            </div>
            {/* Section Spacer */}
            {/* Background Gradient */}
            <div className='absolute left-1/2 top-[80%] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#5636C7] to-[#5028DD] blur-[250px]'></div>
            <div className='absolute bottom-0 left-1/2 h-[77px] w-full -translate-x-1/2 bg-[url(/assets/img_placeholder/th-2/arc-top-shape-1.svg)] bg-cover bg-center bg-no-repeat'></div>
          </div>
        </section>
        {/*...::: Hero Section End :::... */}
        {/*...::: Feature Section Start :::... */}
        <section id='feature-section'>
          {/* Section Spacer */}
          <div className='pb-20 pt-1 xl:pb-[130px] xl:pt-[53px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Section Content Block */}
              <div className='jos mb-10 text-left sm:mx-auto sm:text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]'>
                <h2 className='font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]'>
                  Remarkable features in effective conversation
                </h2>
              </div>
              {/* Section Content Block */}
              {/* Feature List */}
              <ul className='grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3'>
                {/* Feature Item */}
                <li
                  className='jos flex flex-col gap-x-[30px] gap-y-6 sm:flex-row'
                  data-jos_delay='0.1'
                >
                  <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white p-4 shadow-[0_4px_60px_0_rgba(0,0,0,0.1)]'>
                    <Image
                      src='/assets/img_placeholder/th-2/icon-feature-1.svg'
                      alt='icon-feature-1'
                      width={49}
                      height={45}
                    />
                  </div>
                  <div className='flex flex-1 flex-col gap-y-5'>
                    <div className='font-clashDisplay text-[22px] font-medium leading-6 lg:text-[28px] lg:leading-5'>
                      Multilingual Support
                    </div>
                    <p>
                      Our AI chatbots are capable for the communicating in
                      multilingual
                    </p>
                  </div>
                </li>
                {/* Feature Item */}
                {/* Feature Item */}
                <li
                  className='jos flex flex-col gap-x-[30px] gap-y-6 sm:flex-row'
                  data-jos_delay='0.2'
                >
                  <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white p-4 shadow-[0_4px_60px_0_rgba(0,0,0,0.1)]'>
                    <Image
                      src='/assets/img_placeholder/th-2/icon-feature-2.svg'
                      alt='icon-feature-2'
                      width={45}
                      height={45}
                    />
                  </div>
                  <div className='flex flex-1 flex-col gap-y-5'>
                    <div className='font-clashDisplay text-[22px] font-medium leading-6 lg:text-[28px] lg:leading-5'>
                      Intent Recognition
                    </div>
                    <p>
                      It can determine what the user is trying to respond
                      accordingly
                    </p>
                  </div>
                </li>
                {/* Feature Item */}
                {/* Feature Item */}
                <li
                  className='jos flex flex-col gap-x-[30px] gap-y-6 sm:flex-row'
                  data-jos_delay='0.3'
                >
                  <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white p-4 shadow-[0_4px_60px_0_rgba(0,0,0,0.1)]'>
                    <Image
                      src='/assets/img_placeholder/th-2/icon-feature-3.svg'
                      alt='icon-feature-3'
                      width={36}
                      height={45}
                    />
                  </div>
                  <div className='flex flex-1 flex-col gap-y-5'>
                    <div className='font-clashDisplay text-[22px] font-medium leading-6 lg:text-[28px] lg:leading-5'>
                      Context Management
                    </div>
                    <p>
                      AI allows chatbots to refer back to a earlier messages,
                      answer follow-up
                    </p>
                  </div>
                </li>
                {/* Feature Item */}
              </ul>
              {/* Feature List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Feature Section End :::... */}
        {/* Separator */}
        <div className='global-container'>
          <div className='h-[1px] w-full bg-[#EAEDF0]' />
        </div>
        {/* Separator */}
        {/*...::: Content Section Start :::... */}
        <section id='content-section-1'>
          {/* Section Spacer */}
          <div className='pb-20 pt-20 md:pb-36 md:pt-32 lg:pb-28 xl:pb-[220px] xl:pt-[130px] xxl:pt-[200px]'>
            {/* Section Container */}
            <div className='global-container'>
              <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_.8fr)_1fr] xl:gap-28 xxl:gap-[134px]'>
                {/* Content Left Block */}
                <div
                  className='jos order-2 mt-16 rounded-md md:order-1 md:mt-0'
                  data-jos_animation='fade-up'
                >
                  <div className="relative h-[494px] rounded-tl-[20px] rounded-tr-[20px] bg-[url('/assets/img_placeholder/th-2/content-shape.jpg')] bg-cover bg-no-repeat">
                    <Image
                      src='/assets/img_placeholder/th-2/th2-content-img-1.png'
                      alt='th2-content-img-1.png'
                      width={320}
                      height={564}
                      className='absolute bottom-0 left-1/2 h-[564px] w-[320px] -translate-x-1/2'
                    />
                  </div>
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div
                  className='jos order-1 md:order-2'
                  data-jos_animation='fade-right'
                >
                  {/* Section Content Block */}
                  <div className='mb-6'>
                    <h2 className='font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]'>
                      Expression of like human attitude
                    </h2>
                  </div>
                  {/* Section Content Block */}
                  <div className='text-lg leading-[1.66]'>
                    <p className='mb-7 last:mb-0'>
                      Our AI chatbots excel at understanding natural language
                      and generating human-like responses. Adapting your
                      conversational style to our chatbot can improve the
                      quality of your interactions.
                    </p>
                    <ul className='mt-12 flex flex-col gap-y-6 font-clashDisplay text-[22px] font-medium leading-[1.28] tracking-[1px] lg:text-[28px]'>
                      <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                        Use natural language as you were talking
                      </li>
                      <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                        The conversation with a polite greeting
                      </li>
                      <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                        Feel free to use emotions and expressions
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Content Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <section id='content-section-2'>
          {/* Section Spacer */}
          <div className='pb-20 md:pb-36 lg:pb-28 xl:pb-[220px]'>
            {/* Section Container */}
            <div className='global-container'>
              <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1fr)_.8fr] xl:gap-28 xxl:gap-[134px]'>
                {/* Content Right Block */}
                <div
                  className='jos order-2 mt-16 rounded-md md:mt-0'
                  data-jos_animation='fade-up'
                >
                  <div className="relative h-[494px] rounded-tl-[20px] rounded-tr-[20px] bg-[url('/assets/img_placeholder/th-2/content-shape.jpg')] bg-cover bg-no-repeat">
                    <Image
                      src='/assets/img_placeholder/th-2/th2-content-img-2.png'
                      alt='th2-content-img-2.png'
                      width={320}
                      height={564}
                      className='absolute bottom-0 left-1/2 h-[564px] w-[320px] -translate-x-1/2'
                    />
                  </div>
                </div>
                {/* Content Right Block */}
                {/* Content Left Block */}
                <div className='jos order-1' data-jos_animation='fade-right'>
                  {/* Section Content Block */}
                  <div className='mb-6'>
                    <h2 className='font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]'>
                      Faster means of communication
                    </h2>
                  </div>
                  {/* Section Content Block */}
                  <div className='text-lg leading-[1.66]'>
                    <p className='mb-7 last:mb-0'>
                      This AI chatbot can handle repetitive tasks and also
                      quickly answer frequently asked questions, businesses to
                      save time and resources.
                    </p>
                    <ul className='mt-12 flex flex-col gap-y-6 font-clashDisplay text-[22px] font-medium leading-[1.28] tracking-[1px] lg:text-[28px]'>
                      <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                        Provide instant responses any queries
                      </li>
                      <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                        Engage in multiple conversations at once
                      </li>
                      <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                        Manage all frequently asked questions
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Content Left Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <section id='content-section-3'>
          {/* Section Spacer */}
          <div className='pb-20 md:pb-36 lg:pb-28 xl:pb-[150px]'>
            {/* Section Container */}
            <div className='global-container'>
              <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_.8fr)_1fr] xl:gap-28 xxl:gap-[134px]'>
                {/* Content Left Block */}
                <div
                  className='jos order-2 mt-16 rounded-md md:order-1 md:mt-0'
                  data-jos_animation='fade-up'
                >
                  <div className="relative h-[494px] rounded-tl-[20px] rounded-tr-[20px] bg-[url('/assets/img_placeholder/th-2/content-shape.jpg')] bg-cover bg-no-repeat">
                    <Image
                      src='/assets/img_placeholder/th-2/th2-content-img-3.png'
                      alt='th2-content-img-3.png'
                      width={320}
                      height={564}
                      className='absolute bottom-0 left-1/2 h-[564px] w-[320px] -translate-x-1/2'
                    />
                  </div>
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div
                  className='jos order-1 md:order-2'
                  data-jos_animation='fade-right'
                >
                  {/* Section Content Block */}
                  <div className='mb-6'>
                    <h2 className='font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]'>
                      Always provide the best answer
                    </h2>
                  </div>
                  {/* Section Content Block */}
                  <div className='mb-12 text-lg leading-[1.66]'>
                    <p className='mb-7 last:mb-0'>
                      AI chatbots are designed to give accurate &amp; relevant
                      answers to the best of their abilities based on the
                      information they are trained and algorithms to ensure
                      high-quality responses.
                    </p>
                    <p className='mb-7 last:mb-0'>
                      Our chatbot responses is influenced by the quality and
                      well-trained chatbots are more likely to provide better
                      answers.
                    </p>
                  </div>
                  <Link
                    rel='noopener noreferrer'
                    href='https://www.example.com'
                    className='button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[18px] text-white after:bg-colorOrangyRed hover:text-white'
                  >
                    Try It Now
                    <Image
                      src='/assets/img_placeholder/th-2/icon-white-long-arrow-right.svg'
                      alt='icon-white-long-arrow-right'
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
                {/* Content Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <section id='content-intregrates-section'>
          <div className='relative z-[1] overflow-hidden bg-colorCodGray text-white'>
            {/* Section Spacer */}
            <div className='py-20 xl:py-[130px]'>
              {/* Section Spacer */}
              <div className='global-container'>
                <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1fr)_.8fr] xl:gap-28 xxl:gap-[134px]'>
                  <div className='jos'>
                    {/* Section Content Block */}
                    <div className='mb-6'>
                      <h2 className='font-clashDisplay text-4xl font-medium leading-[1.06] text-white sm:text-[44px] lg:text-[56px] xl:text-[75px]'>
                        Integrates your favorite channels
                      </h2>
                    </div>
                    {/* Section Content Block */}
                    <p className='mb-7 last:mb-0'>
                      The ability to integrate AI chatbots into multiple
                      channels enables businesses to meet users where they are,
                      providing a consistent and convenient experience across
                      various touchpoints.
                    </p>
                    <ul className='my-12 flex flex-col gap-y-6 font-clashDisplay text-[22px] font-medium leading-[1.28] tracking-[1px] lg:text-[28px]'>
                      <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                        It preferred all communication channels
                      </li>
                      <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                        Use platform users regardless of support
                      </li>
                    </ul>
                    <Link
                      rel='noopener noreferrer'
                      href='https://www.example.com'
                      className='button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[18px] text-white after:bg-colorOrangyRed hover:text-white'
                    >
                      Explore Integrations
                      <Image
                        src='/assets/img_placeholder/th-2/icon-white-long-arrow-right.svg'
                        alt='icon-white-long-arrow-right'
                        width={24}
                        height={24}
                      />
                    </Link>
                  </div>
                  <div className='flex flex-col gap-6 overflow-hidden rounded-[30px] bg-gradient-to-t from-[rgba(255,255,255,.1)] to-[rgba(0,0,0,0.5)] py-[124px]'>
                    {/* Logo Horizontal Animation */}
                    <div className='horizontal-slide-from-right-to-left flex w-[1161px] gap-x-6'>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-discord.svg'
                          alt='icon-flat-color-discord'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-github.svg'
                          alt='icon-flat-color-github'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-mailchamp.svg'
                          alt='icon-flat-color-mailchamp'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-messenger.svg'
                          alt='icon-flat-color-messenger'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-skype.svg'
                          alt='icon-flat-color-skype'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-slack.svg'
                          alt='icon-flat-color-slack'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-snapchat.svg'
                          alt='icon-flat-color-snapchat'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-whatsapp.svg'
                          alt='icon-flat-color-whatsapp'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-zendesk.svg'
                          alt='icon-flat-color-zendesk'
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    {/* Logo Horizontal Animation */}
                    {/* Logo Horizontal Animation */}
                    <div className='horizontal-slide-from-left-to-right flex w-[1161px] gap-x-6'>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-discord.svg'
                          alt='icon-flat-color-discord'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-github.svg'
                          alt='icon-flat-color-github'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-mailchamp.svg'
                          alt='icon-flat-color-mailchamp'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-messenger.svg'
                          alt='icon-flat-color-messenger'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-skype.svg'
                          alt='icon-flat-color-skype'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-slack.svg'
                          alt='icon-flat-color-slack'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-snapchat.svg'
                          alt='icon-flat-color-snapchat'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-whatsapp.svg'
                          alt='icon-flat-color-whatsapp'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white'>
                        <Image
                          src='/assets/img_placeholder/th-2/icon-flat-color-zendesk.svg'
                          alt='icon-flat-color-zendesk'
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    {/* Logo Horizontal Animation */}
                  </div>
                </div>
              </div>
              {/* Section Spacer */}
            </div>
            {/* Section Spacer */}
            <div className='absolute left-1/2 top-[80%] -z-[1] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#5636C7] to-[#5028DD] blur-[250px]'></div>
          </div>
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Testimonial Section Start :::... */}
        <section id='testimonial-section'>
          {/* Section Spacer */}
          <div className='py-20 xl:py-[130px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Section Content Block */}
              <div className='jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]'>
                <h2 className='font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]'>
                  Check user reviews using our AI chatbot
                </h2>
              </div>
              {/* Section Content Block */}

              {/* Testimonial Carousel */}
              <Swiper
                modules={[Navigation]}
                loop={true}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className='jos testimonial-slider relative z-[1]'
              >
                <SwiperSlide>
                  <div className='flex flex-col gap-x-16 md:flex-row lg:gap-x-28 items-center xxl:items-baseline xl:gap-x-[134px]'>
                    <div className='h-auto w-[300px] self-center overflow-hidden rounded-[10px] lg:w-[375px] xl:h-[494px] xl:w-[526px]'>
                      <Image
                        src='/assets/img_placeholder/th-2/testimonial-user-img-1.jpg'
                        alt='testimonial-img-1'
                        width={526}
                        height={494}
                        className='h-full w-full object-cover'
                        loading='lazy'
                      />
                    </div>
                    <div className='mt-[30px] flex-1 text-center md:text-left'>
                      <div className='mb-5 font-clashDisplay text-2xl font-medium leading-[1.28] tracking-[1px] lg:mb-9 lg:text-[28px]'>
                        “Easy to use AI Chatbot with many options”
                      </div>
                      <p className='mb-9 leading-[1.33] lg:mb-[50px] lg:text-lg xl:text-2xl'>
                        I have been using AI chatbots for several chatbots for
                        the past year. I learned quickly and exploring the tool,
                        &amp; asking questions to Slack support. The tool is
                        very easy user-friendly and the support group helps
                        quickly and thoroughly. Keep up the good work!
                      </p>
                      <div className='text-[21px] font-semibold leading-[1.42]'>
                        -Henry Fayol
                        <span className='mt-1 block text-lg font-normal leading-[1.66]'>
                          Professional blog writer
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col gap-x-16 md:flex-row lg:gap-x-28 items-center xxl:items-baseline xl:gap-x-[134px]'>
                    <div className='h-auto w-[300px] self-center overflow-hidden rounded-[10px] lg:w-[375px] xl:h-[494px] xl:w-[526px]'>
                      <Image
                        src='/assets/img_placeholder/th-2/testimonial-user-img-1.jpg'
                        alt='testimonial-img-1'
                        width={526}
                        height={494}
                        className='h-full w-full object-cover'
                        loading='lazy'
                      />
                    </div>
                    <div className='mt-[30px] flex-1 text-center md:text-left'>
                      <div className='mb-5 font-clashDisplay text-2xl font-medium leading-[1.28] tracking-[1px] lg:mb-9 lg:text-[28px]'>
                        “Easy to use AI Chatbot with many options”
                      </div>
                      <p className='mb-9 leading-[1.33] lg:mb-[50px] lg:text-lg xl:text-2xl'>
                        I have been using AI chatbots for several chatbots for
                        the past year. I learned quickly and exploring the tool,
                        &amp; asking questions to Slack support. The tool is
                        very easy user-friendly and the support group helps
                        quickly and thoroughly. Keep up the good work!
                      </p>
                      <div className='text-[21px] font-semibold leading-[1.42]'>
                        -Henry Fayol
                        <span className='mt-1 block text-lg font-normal leading-[1.66]'>
                          Professional blog writer
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* If we need navigation buttons */}
                <div className='testimonial-nav'>
                  <button
                    onClick={() => swiperRef.current.slidePrev()}
                    className='testimonial-nav-prev testimonial-nav-dir'
                  >
                    <Image
                      src='/assets/img_placeholder/th-2/icon-black-long-arrow-left.svg'
                      alt='icon-black-long-arrow-left'
                      width={24}
                      height={24}
                    />
                    <Image
                      src='/assets/img_placeholder/th-2/icon-white-long-arrow-left.svg'
                      alt='icon-white-long-arrow-left'
                      width={24}
                      height={24}
                    />
                  </button>
                  <button
                    onClick={() => swiperRef.current.slideNext()}
                    className='testimonial-nav-next testimonial-nav-dir'
                  >
                    <Image
                      src='/assets/img_placeholder/th-2/icon-black-long-arrow-right.svg'
                      alt='icon-black-long-arrow-right'
                      width={24}
                      height={24}
                    />
                    <Image
                      src='/assets/img_placeholder/th-2/icon-white-long-arrow-right.svg'
                      alt='icon-white-long-arrow-right'
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </Swiper>

              {/* Testimonial Carousel */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Testimonial Section Start :::... */}
        {/* Separator */}
        <div className='global-container'>
          <div className='h-[1px] w-full bg-[#EAEDF0]' />
        </div>
        {/* Separator */}
        {/*...::: Blog Section Start :::... */}
        <div id='blog-section'>
          {/* Section Spacer */}
          <div className='py-20 xl:py-[130px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Section Content Block */}
              <div className='jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mx-0 lg:mb-20 lg:max-w-[636px] lg:text-left'>
                <h2 className='font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]'>
                  Find out more in our recent blogs
                </h2>
              </div>
              {/* Section Content Block */}
              {/* Blog List */}
              <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
                {/* Blog Post Single Item */}
                <article
                  className='jos group overflow-hidden rounded-[10px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)]'
                  data-jos_delay='0.1'
                >
                  {/* Blog Image */}
                  <Link
                    href='/blog-details'
                    className='block h-[320px] w-full overflow-hidden rounded-[30px]'
                  >
                    <Image
                      src='/assets/img_placeholder/th-1/blog-main-1.jpg'
                      alt='blog-main-1'
                      width={416}
                      height={320}
                      className='h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105'
                    />
                  </Link>
                  {/* Blog Image */}
                  {/* Blog Content */}
                  <div className='p-6'>
                    <h5 className='mb-7 font-clashDisplay font-medium leading-[1.28] tracking-[1px] text-[28] hover:text-colorViolet'>
                      <Link href='/blog-details'>
                        AI Chatbot: It essential for customer self-service
                      </Link>
                    </h5>
                    <div className='flex items-center justify-between gap-x-4'>
                      <span>23 June 2024</span>
                      <Link href='/blog-details' className='h-[30px] w-[30px]'>
                        <Image
                          src='/assets/img_placeholder//th-2/icon-blue-long-arrow-right.svg'
                          alt='icon-blue-long-arrow-right'
                          width={30}
                          height={30}
                          className='transition-all duration-300 group-hover:-rotate-45'
                        />
                      </Link>
                    </div>
                  </div>
                  {/* Blog Content */}
                </article>
                {/* Blog Post Single Item */}
                {/* Blog Post Single Item */}
                <article
                  className='jos group overflow-hidden rounded-[10px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)]'
                  data-jos_delay='0.2'
                >
                  {/* Blog Image */}
                  <Link
                    href='/blog-details'
                    className='block h-[320px] w-full overflow-hidden rounded-[30px]'
                  >
                    <Image
                      src='/assets/img_placeholder/th-1/blog-main-2.jpg'
                      alt='blog-main-2'
                      width={416}
                      height={320}
                      className='h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105'
                    />
                  </Link>
                  {/* Blog Image */}
                  {/* Blog Content */}
                  <div className='p-6'>
                    <h5 className='mb-7 font-clashDisplay font-medium leading-[1.28] tracking-[1px] text-[28] hover:text-colorViolet'>
                      <Link href='/blog-details'>
                        How to build your own AI chatbot with custom data
                      </Link>
                    </h5>
                    <div className='flex items-center justify-between gap-x-4'>
                      <span>20 June 2024</span>
                      <Link href='/blog-details' className='h-[30px] w-[30px]'>
                        <Image
                          src='/assets/img_placeholder//th-2/icon-blue-long-arrow-right.svg'
                          alt='icon-blue-long-arrow-right'
                          width={30}
                          height={30}
                          className='transition-all duration-300 group-hover:-rotate-45'
                        />
                      </Link>
                    </div>
                  </div>
                  {/* Blog Content */}
                </article>
                {/* Blog Post Single Item */}
                {/* Blog Post Single Item */}
                <article
                  className='jos group overflow-hidden rounded-[10px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)]'
                  data-jos_delay='0.3'
                >
                  {/* Blog Image */}
                  <Link
                    href='/blog-details'
                    className='block h-[320px] w-full overflow-hidden rounded-[30px]'
                  >
                    <Image
                      src='/assets/img_placeholder/th-1/blog-main-3.jpg'
                      alt='blog-main-3'
                      width={416}
                      height={320}
                      className='h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105'
                    />
                  </Link>
                  {/* Blog Image */}
                  {/* Blog Content */}
                  <div className='p-6'>
                    <h5 className='mb-7 font-clashDisplay font-medium leading-[1.28] tracking-[1px] text-[28] hover:text-colorViolet'>
                      <Link href='/blog-details'>
                        8 best AI chatbot tools for boost your business
                      </Link>
                    </h5>
                    <div className='flex items-center justify-between gap-x-4'>
                      <span>18 June 2024</span>
                      <Link href='/blog-details' className='h-[30px] w-[30px]'>
                        <Image
                          src='/assets/img_placeholder//th-2/icon-blue-long-arrow-right.svg'
                          alt='icon-blue-long-arrow-right'
                          width={30}
                          height={30}
                          className='transition-all duration-300 group-hover:-rotate-45'
                        />
                      </Link>
                    </div>
                  </div>
                  {/* Blog Content */}
                </article>
                {/* Blog Post Single Item */}
              </div>
              {/* Blog List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </div>
        {/*...::: Blog Section Start :::... */}
        {/*...::: FAQ Section Start :::... */}
        <section id='faq-section'>
          {/* Section Spacer */}
          <div className='pb-40 xl:pb-[220px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Section Content Block */}
              <div className='jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]'>
                <h2 className='font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]'>
                  AI Chatbot FAQs for more information
                </h2>
              </div>
              {/* Section Content Block */}
              {/* Accordion*/}
              <ul className='accordion flex flex-col gap-y-6'>
                {/* Accordion items */}
                <li
                  className={`jos accordion-item is-3 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${
                    activeIndex === 0 ? 'active' : ''
                  }`}
                  onClick={() => handleAccordion(0)}
                  data-jos_delay='0.1'
                >
                  <div className='accordion-header flex items-center justify-between'>
                    <h5 className='font-clashDisplay text-xl font-medium leading-[1.2] tracking-[1px] lg:text-[28px]'>
                      What is Artificial Intelligence (AI)?
                    </h5>
                    <div className='accordion-icon is-blue'>
                      <Image
                        src='/assets/img_placeholder/plus.svg'
                        alt='plus'
                        width={24}
                        height={24}
                      />
                      <Image
                        src='/assets/img_placeholder/plus-white.svg'
                        alt='plus-white'
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div className='accordion-content text-lg text-[#2C2C2C]'>
                    <p>
                      AI chatbots work by analyzing user input, understanding
                      the intent behind the message, and providing relevant
                      responses based on pre-defined rules or machine learning
                      models. They can learn from user interactions to improve
                      over time.
                    </p>
                  </div>
                </li>
                {/* Accordion items */}
                {/* Accordion items */}
                <li
                  className={`jos accordion-item is-3 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${
                    activeIndex === 1 ? 'active' : ''
                  }`}
                  onClick={() => handleAccordion(1)}
                  data-jos_delay='0.1'
                >
                  <div className='accordion-header flex items-center justify-between'>
                    <h5 className='font-clashDisplay text-xl font-medium leading-[1.2] tracking-[1px] lg:text-[28px]'>
                      What are the benefits of using AI chatbots?
                    </h5>
                    <div className='accordion-icon is-blue'>
                      <Image
                        src='/assets/img_placeholder/plus.svg'
                        alt='plus'
                        width={24}
                        height={24}
                      />
                      <Image
                        src='/assets/img_placeholder/plus-white.svg'
                        width={24}
                        height={24}
                        alt='plus-white'
                      />
                    </div>
                  </div>
                  <div className='accordion-content text-lg text-[#2C2C2C]'>
                    <p>
                      AI chatbots work by analyzing user input, understanding
                      the intent behind the message, and providing relevant
                      responses based on pre-defined rules or machine learning
                      models. They can learn from user interactions to improve
                      over time.
                    </p>
                  </div>
                </li>
                {/* Accordion items */}
                {/* Accordion items */}
                <li
                  className={`jos accordion-item is-3 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${
                    activeIndex === 2 ? 'active' : ''
                  }`}
                  onClick={() => handleAccordion(2)}
                  data-jos_delay='0.1'
                >
                  <div className='accordion-header flex items-center justify-between'>
                    <h5 className='font-clashDisplay text-xl font-medium leading-[1.2] tracking-[1px] lg:text-[28px]'>
                      Can AI chatbots understand multiple languages?
                    </h5>
                    <div className='accordion-icon is-blue'>
                      <Image
                        src='/assets/img_placeholder/plus.svg'
                        alt='plus'
                        width={24}
                        height={24}
                      />
                      <Image
                        src='/assets/img_placeholder/plus-white.svg'
                        alt='plus-white'
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div className='accordion-content text-lg text-[#2C2C2C]'>
                    <p>
                      AI chatbots work by analyzing user input, understanding
                      the intent behind the message, and providing relevant
                      responses based on pre-defined rules or machine learning
                      models. They can learn from user interactions to improve
                      over time.
                    </p>
                  </div>
                </li>
                {/* Accordion items */}
                {/* Accordion items */}
                <li
                  className={`jos accordion-item is-3 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${
                    activeIndex === 3 ? 'active' : ''
                  }`}
                  onClick={() => handleAccordion(3)}
                  data-jos_delay='0.1'
                >
                  <div className='accordion-header flex items-center justify-between'>
                    <h5 className='font-clashDisplay text-xl font-medium leading-[1.2] tracking-[1px] lg:text-[28px]'>
                      Can AI chatbots provide personalized responses?
                    </h5>
                    <div className='accordion-icon is-blue'>
                      <Image
                        src='/assets/img_placeholder/plus.svg'
                        alt='plus'
                        width={24}
                        height={24}
                      />
                      <Image
                        src='/assets/img_placeholder/plus-white.svg'
                        alt='plus-white'
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div className='accordion-content text-lg text-[#2C2C2C]'>
                    <p>
                      AI chatbots work by analyzing user input, understanding
                      the intent behind the message, and providing relevant
                      responses based on pre-defined rules or machine learning
                      models. They can learn from user interactions to improve
                      over time.
                    </p>
                  </div>
                </li>
                {/* Accordion items */}
                {/* Accordion items */}
                <li
                  className={`jos accordion-item is-3 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${
                    activeIndex === 4 ? 'active' : ''
                  }`}
                  onClick={() => handleAccordion(4)}
                  data-jos_delay='0.1'
                >
                  <div className='accordion-header flex items-center justify-between'>
                    <h5 className='font-clashDisplay text-xl font-medium leading-[1.2] tracking-[1px] lg:text-[28px]'>
                      How can I integrate an AI chatbot into my business or
                      website?
                    </h5>
                    <div className='accordion-icon is-blue'>
                      <Image
                        width={24}
                        height={24}
                        src='/assets/img_placeholder/plus.svg'
                        alt='plus'
                      />
                      <Image
                        width={24}
                        height={24}
                        src='/assets/img_placeholder/plus-white.svg'
                        alt='plus-white'
                      />
                    </div>
                  </div>
                  <div className='accordion-content text-lg text-[#2C2C2C]'>
                    <p>
                      AI chatbots work by analyzing user input, understanding
                      the intent behind the message, and providing relevant
                      responses based on pre-defined rules or machine learning
                      models. They can learn from user interactions to improve
                      over time.
                    </p>
                  </div>
                </li>
                {/* Accordion items */}
              </ul>
              {/* Accordion*/}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: FAQ Section End :::... */}
      </main>
    </>
  );
}

export default Home_2;
