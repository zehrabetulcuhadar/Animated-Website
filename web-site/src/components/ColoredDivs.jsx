import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ColoredDivsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
`;

const ColoredDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 10px;
  background-color: #ff7675;
  overflow: hidden;
`;

const ColoredImage = styled(motion.img)`
  max-width: 50%; 
  max-height: 100%; 
`;

const ColoredText = styled(motion.div)`
  flex: 1;
  padding: 30px;
  font-size: 21px;
  position: relative;
  opacity: 0;
`;

const ColoredDiv1 = styled(ColoredDiv)`
  background-color: #ff7675;
`;

const ColoredDiv2 = styled(ColoredDiv)`
  background-color: #74b9ff;
`;

const ColoredDiv3 = styled(ColoredDiv)`
  background-color: #55efc4;
`;

const ColoredDiv4 = styled(ColoredDiv)`
  background-color: #ffeaa7;
`;

const ColoredDiv5 = styled(ColoredDiv)`
  background-color: #a29bfe;
`;

const ColoredDiv6 = styled(ColoredDiv)`
  background-color: #fd79a8;
`;

const ColoredDivs = () => {
    const [ref1, inView1] = useInView({ triggerOnce: true });
    const [ref2, inView2] = useInView({ triggerOnce: true });
    const [ref3, inView3] = useInView({ triggerOnce: true });
    const [ref4, inView4] = useInView({ triggerOnce: true });
    const [ref5, inView5] = useInView({ triggerOnce: true });
    const [ref6, inView6] = useInView({ triggerOnce: true });
  
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();
    const controls5 = useAnimation();
    const controls6 = useAnimation();

    const animateText = (controls, inView) => {
      if (inView) {
        controls.start({ opacity: 1, x: 0 });
      } else {
        controls.start({ opacity: 0, x: '-100%' });
      }
    };

    useEffect(() => {
       animateText(controls1, inView1);
      }, [controls1, inView1]);

    useEffect(() => {
      animateText(controls2, inView2);
      }, [controls2, inView2]);
    
      useEffect(() => {
        animateText(controls3, inView3);
       }, [controls3, inView3]);

       useEffect(() => {
        animateText(controls4, inView4);
       }, [controls4, inView4]);

       useEffect(() => {
        animateText(controls5, inView5);
       }, [controls5, inView5]);

      
       useEffect(() => {
        animateText(controls6, inView6);
       }, [controls6, inView6]);
      
       const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
      
        const offset = windowHeight * 0.7; 

        if (ref1.current) {
          const progress = (scrollY - ref1.current.offsetTop + offset) / windowHeight;
      
          // Update the opacity and x position of the text element
          controls1.start({ opacity: progress, x: -100 + progress * 100 });
        }
        // ... similarly, add checks for other refs ...
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [controls1, controls2, controls3, controls4, controls5, controls6]);
      

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [handleScroll]);

    useEffect(() => {
      if (inView1) {
        controls1.start({ opacity: 1, x: 0 });
      } else {
        controls1.start({ opacity: 0, x: '100%' });
      }
    }, [controls1, inView1]);
  
    useEffect(() => {
      if (inView2) {
        controls2.start({ opacity: 1, x: 0 });
      } else {
        controls2.start({ opacity: 0, x: '100%' });
      }
    }, [controls2, inView2]);
  
    useEffect(() => {
      if (inView3) {
        controls3.start({ opacity: 1, x: 0 });
      } else {
        controls3.start({ opacity: 0, x: '100%' });
      }
    }, [controls3, inView3]);
  
    useEffect(() => {
      if (inView4) {
        controls4.start({ opacity: 1, x: 0 });
      } else {
        controls4.start({ opacity: 0, x: '100%' });
      }
    }, [controls4, inView4]);
  
    useEffect(() => {
      if (inView5) {
        controls5.start({ opacity: 1, x: 0 });
      } else {
        controls5.start({ opacity: 0, x: '100%' });
      }
    }, [controls5, inView5]);
  
    useEffect(() => {
      if (inView6) {
        controls6.start({ opacity: 1, x: 0 });
      } else {
        controls6.start({ opacity: 0, x: '100%' });
      }
    }, [controls6, inView6]);

  return (
    <ColoredDivsContainer>
      <ColoredDiv1 ref={ref1}>
        <ColoredImage
          src="img/img-1.jpg"
          alt="Image1"
          initial={{ opacity: 0, x: '100%' }}
          animate={controls1}
          transition={{ duration: 0.5 }}
        />
        <ColoredText animate={controls1}>
            <h3>Front-End Developer Nedir ?</h3>
            <p>Türkçe adı ön uç geliştirici olan bu kişi web sitesi tasarımını web’de uygulamak için gerekli kodlar yazan kişi olarak belirtilebilir. İyi bir ön uç web geliştiricisi, CSS, HTML ve JavaScript olmak üzere toplamda en az üç programlama dilinde akıcı bir şekilde kullanabilir.</p>
        </ColoredText>
      </ColoredDiv1>
      <ColoredDiv2 ref={ref2}>
        <ColoredImage
          src="img/img-2.jpg"
          alt="Image2"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : '100%' }}
          transition={{ duration: 0.5 }}
        />
        <ColoredText animate={controls2}>
          <h3>Back-End Developer Nedir ?</h3>
          <p>Ön uç geliştiricilerin bir web sitesinin harika göründüğünden, iyi çalıştığından ve doğru içeriği içerdiğinden emin olmak için zor bir işi var gibi görünse de, arka uç geliştiricilerin işi çok daha kötü diyebiliriz. Ön uç geliştiriciler, istemci tarafı programlamadan sorumluyken, arka uç geliştiricilerin sunucu tarafı ile ilgilenmesi gerekir.</p>
        </ColoredText>
      </ColoredDiv2>
      <ColoredDiv3 ref={ref3}>
        <ColoredImage
          src="img/img-3.jpg"
          alt="Image3"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : '100%' }}
          transition={{ duration: 0.5 }}
        />
        <ColoredText animate={controls3}>
          <h3>Full-Stack Developer Nedir ?</h3>
          <p>Türkçe karşılığı tam yığın geliştiriciler olan bu kişiler, hem ön hem de arka uç stratejilerini ve süreçlerini anlar, bu da tüm süreci denetlemek için mükemmel bir şekilde konumlandırıldıkları anlamına gelir.</p>
        </ColoredText>
      </ColoredDiv3>
      <ColoredDiv4 ref={ref4}>
        <ColoredImage
          src="img/img-4.jpg"
          alt="Image4"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: inView4 ? 1 : 0, x: inView4 ? 0 : '100%' }}
          transition={{ duration: 0.5 }}
        />
        <ColoredText animate={controls4}>
          <h3>HTML Nedir?</h3>
          <p>İngilizce olarak "HyperText Markup Language" kısaltmasıdır. Web sayfalarının en temel yapı taşıdır. Web sayfalarının yapısını ve anlamını tanımlar. Web sayfalarını oluşturmak için kullanılan standart metin işaretleme dilidir. HTML, bir programlama dili olarak tanımlanmaz. </p>
        </ColoredText>
      </ColoredDiv4>
      <ColoredDiv5 ref={ref5}>
        <ColoredImage
          src="img/img-5.jpg"
          alt="Image5"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: inView5 ? 1 : 0, x: inView5 ? 0 : '100%' }}
          transition={{ duration: 0.5 }}
        />
        <ColoredText animate={controls5}>
          <h3>Web Site Nedir ?</h3>
          <p>Web site, tarayıcı Google Chrome, Mozilla Firefox, Microsoft Edge vs. içerisinden erişilebilen web sayfalarının koleksiyonudur. Şu anda www.websiteseomarketing.com web sitesinde Website Nedir ? web sayfasında bulunuyorsunuz. Internet üzerinden yayın yapan tüm web siteleri World Wide Web’i oluşturur.</p>
        </ColoredText>
      </ColoredDiv5>
      <ColoredDiv6 ref={ref6}>
        <ColoredImage
          src="img/img-6.jpg"
          alt="Image6"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: inView6 ? 1 : 0, x: inView6 ? 0 : '100%' }}
          transition={{ duration: 0.5 }}
        />
        <ColoredText animate={controls6}>
          <h3>CSS Nedir ? </h3>
          <p>Günümüzde, özellikle arayüz tasarımını kolaylaştırmak isteyen Full Stack web geliştiricilerin imdadına yetişen bazı CSS kütüphaneleri bulunuyor. Bunlardan bazıları Bootstrap, Materialize ve Semantic UI olarak sayılabilir. Bu CSS kütüphanelerinin sunduğu Flexbox, Grid yapıları ve hazır birçok class’ı kullanarak arayüz tasarımlarınızı gerçekleştirebilirsiniz. </p>
        </ColoredText>
      </ColoredDiv6>
    </ColoredDivsContainer>
  )
}

export default ColoredDivs