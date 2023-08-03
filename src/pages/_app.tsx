import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  const description =
    "Welcome to Olamilekan's portfolio website, a showcase of my creative work and accomplishments. Explore my diverse collection of projects, including web design, graphic design, and photography. Get inspired by my passion for innovation and attention to detail. Discover how I combine aesthetics with functionality to deliver impactful and user-friendly experiences. Join me on this visual journey and witness the power of design. Contact me to collaborate on your next exciting project. Let's create something extraordinary together!";
  return (
    <>
      <Head>
        <meta
          key="og:url"
          property="og:url"
          content={`https://olamilekan-one.vercel.app/${router.pathname}`}
        />
        <meta key="og:type" property="og:type" content="article" />
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={`https://olamilekan-one.vercel.app/n-logo.png`}
        />
        <meta
          name="keywords"
          content="Frontend Development, Web Design,Responsive Web Development,User Experience (UX),User Interface (UI),HTML5,CSS3,JavaScript,jQuery,React.js,Bootstrap,Mobile-First Design,Cross-Browser Compatibility,Accessibility,Performance Optimization,Code Efficiency,Website Maintenance,Portfolio Showcase, Frontend Frameworks,CSS Frameworks,Progressive Web Apps (PWA),Responsive Design,Mobile Optimization,Cross-Platform Development,JavaScript Libraries,Web Animation,UI/UX Design Principles,Wireframing,Prototyping,A/B Testing,Performance Monitoring,Version Control (Git),Frontend Tools and Technologies,Frontend Testing,Web Development Trends,Browser Compatibility Testing,Debugging,Frontend Security"
        />
        <meta
          name="google-site-verification"
          content="kFXzOWt-zLMwRqqGlPyUXKTworDZrhWV0Oh7_8pMdno"
        />
        <link rel="canonical" href="https://olamilekan-one.vercel.app" />
        <meta name="robots" content="INDEX,FOLLOW"></meta>

        <meta property="og:title" content="Olamilekan portfolio" />
        <meta property="og:description" content={description} />
        <meta property="og:URL" content="https://olamilekan-one.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
