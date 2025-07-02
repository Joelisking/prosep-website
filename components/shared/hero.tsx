'use client';
import Image from 'next/image';
import img from '@/public/LooperGroup.svg';
import SectionHeader from '../shared/section-header';
import Container from '../shared/container';
import { motion } from 'framer-motion';

function PageHero({ title }: { title: string }) {
  return (
    <section className="border-b-2 border-secondary text-white relative overflow-hidden">
      <Container className="mx-auto px-4 sm:px-6 mt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20">
          <div className="w-full md:w-4/5">
            <div className="mt-2 sm:mt-3 md:mt-4 w-full xl:w-4/5 text-black md:mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden md:block">
                <SectionHeader className="font-extrabold">
                  {title}
                </SectionHeader>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block md:hidden">
                <SectionHeader size="base" className="">
                  {title}
                </SectionHeader>
              </motion.div>

              {/* <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-black text-sm sm:text-base md:text-lg italic mt-2 sm:mt-3"
              >
                We are a team of passionate individuals who are
                dedicated to providing the best possible service to
                our clients.
              </motion.p> */}
            </div>
          </div>
        </motion.div>
      </Container>

      <div className="absolute top-0 bottom-0 right-0 h-full w-full pointer-events-none">
        <div className="relative h-full w-full">
          <Image
            src={img}
            alt="svg"
            className="h-full w-full object-contain object-right opacity-40 sm:opacity-60 lg:opacity-100 transition-all duration-300"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default PageHero;
