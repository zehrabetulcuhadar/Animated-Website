import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

const StyledAboutPage = styled.div`
  background-color: #f0f0f0;
  background-image: url('/img/space3.jpg');
  background-size: cover;
  background-position: center;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh);
  font-size: 40px;
  overflow: hidden;
`;

const ColoredSection = styled(motion.div)`
  padding: 2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  opacity: 0.7;
  transition: opacity 0.3s, box-shadow 0.3s, transform 0.3s;

  &:hover {
    opacity: 1;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`;

const TextContent = styled.div`
  position: relative;
  z-index: 1;
  font-weight: bold;
  font-size: 100px;
`;

const About = () => {
  const textToType = "Who are we ?";
  const [typedText, setTypedText] = useState('');

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedText(textToType.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > textToType.length) {
        clearInterval(interval);
      }
    }, 150); 

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth, transition: {duration: 0.7}}}
    >
      <StyledAboutPage>
        <StyledContent>
        <TextContent>
          {typedText}
        </TextContent>
        </StyledContent>
        <ColoredSection
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: inView1 ? 1 : 0,
            y: inView1 ? 0 : 50 
          }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          style={{ backgroundColor: '#007bff' }}
        >
          <Container className="mt-5">
            <Row>
              <Col md={6}>
                <StyledCard whileHover={{ scale: 1.1 }}>
                  <Card.Header>Our Values</Card.Header>
                  <Card.Body>
                    <Card.Text>
                    We value innovation, teamwork, and customer satisfaction. Our values are deeply rooted in our commitment to delivering high-quality solutions that make a positive impact on the world.
                    </Card.Text>
                    <blockquote>
                      "Innovation distinguishes between a leader and a follower." - Steve Jobs
                    </blockquote>
                  </Card.Body>
                </StyledCard>
              </Col>
              <Col md={6}>
                <StyledCard whileHover={{ scale: 1.1 }}>
                  <Card.Header>Our Vision</Card.Header>
                  <Card.Body>
                    <Card.Text>
                    Vizyonumuz, dünya genelinde yenilikçi çözümler sunarak insanların yaşamlarını zenginleştiren bir lider olmaktır. Teknolojiyi, insanların karşılaştığı zorlukları çözmek ve yaşam kalitesini artırmak için kullanıyoruz. Sürdürülebilirlik ve toplumsal sorumluluk ilkelerini gözeterek, geleceğe yönelik dönüştürücü çözümler geliştirmeyi hedefliyoruz.
                    </Card.Text>
                  </Card.Body>
                </StyledCard>
              </Col>
            </Row>
          </Container>
        </ColoredSection>
        <ColoredSection
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          style={{ backgroundColor: '#28a745' }}
        >
          <Container className="mt-5">
            <Row>
              <Col md={6}>
                <StyledCard whileHover={{ scale: 1.1 }}>
                  <Card.Header>Our Mission</Card.Header>
                  <Card.Body>
                    <Card.Text>
                    Misyonumuz, müşterilerimize yüksek kaliteli ürünler ve hizmetler sunarak, onların beklentilerini aşmak ve iş ortaklarımızla uzun süreli değer yaratmaktır. İnovasyonu teşvik eden bir kültürle, endüstrideki en iyi uygulamaları birleştiriyor ve en zorlu problemlere yaratıcı ve sürdürülebilir çözümler sunuyoruz. Amacımız, topluma olumlu bir etki yaparak geleceği şekillendirmektir.
                    </Card.Text>
                    <p>
                      "The best way to predict the future is to create it." - Abraham Lincoln
                    </p>
                  </Card.Body>
                </StyledCard>
              </Col>
              <Col md={6}>
                <StyledCard whileHover={{ scale: 1.1 }}>
                  <Card.Header>Who Are We?</Card.Header>
                  <Card.Body>
                    <Card.Text>
                    Biz, farklı disiplinlerden gelen tutkulu inovatörlerden oluşan bir ekibiz. Çeşitli yeteneklerimiz ve deneyimlerimizle bir araya gelerek, karmaşık problemlere özgün bakış açıları sunuyoruz. Teknolojiye olan bağlılığımız ve müşteri odaklı yaklaşımımızla, her projede mükemmeliyeti hedefliyoruz. İşbirliğine dayalı bir kültürle, takım olarak daha büyük bir amacın peşinde koşuyoruz: Dünyayı daha iyi bir yer yapmak için güçlü ve etkili çözümler sunmak.
                    </Card.Text>
                  </Card.Body>
                </StyledCard>
              </Col>
            </Row>
          </Container>
        </ColoredSection>
      </StyledAboutPage>

    </motion.div>
  )
}

export default About




// import AboutQuote from './AboutQuote';
// import AboutCard from './AboutCard';



  // const repeatCards = 1;
  // const repeatCount = 8;
  // const [selectedId, setSelectedId] = useState(null);

  // const renderAboutQuotes = () => {
  //   const aboutQuotes = [];
  //   for (let i = 0; i < repeatCount; i++) {
  //     aboutQuotes.push(
  //       <div key={i} style={{ flex: '0 0 300px', margin: '10px' }}>
  //         <AboutQuote />
  //       </div>
  //     );
  //   }
  //   return aboutQuotes;
  // };

  // const renderAboutCards = () => {
  //   const aboutCards = [];
  //   for (let i = 0; i < repeatCards; i++) {
  //     aboutCards.push(
  //       <div key={i} className="mb-3">
  //         <AboutCard item={{ id: i }} selectedId={selectedId} setSelectedId={setSelectedId} /> {/* Gönderilen id ve state değerleri burada */}
  //       </div>
  //     );
  //   }
  //   return aboutCards;
  // };



  /* <h2 className="text-center mt-3 mb-4">About Page</h2>

      <div className="d-flex flex-wrap justify-content-center">
        {renderAboutCards()}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {renderAboutQuotes()}
      </div> */
