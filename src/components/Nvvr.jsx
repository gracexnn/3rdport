
import { Inter } from 'next/font/google'
import Avatar1 from '@/components/Avatar'
import { Modal, useModal, Button, Text, Image } from "@nextui-org/react";
import { PerCard } from './PerCard';

const inter = Inter({ subsets: ['latin'] })

export default function Nvvr() {
  const { setVisible, bindings } = useModal();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 px-4 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Tech stack&nbsp;
         <Avatar1 />
        </p>
        <div className="px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://instagram.com/gracexnn"
            target="_blank"
            rel="noopener noreferrer"
          >
            By gracexnn
          </a>
        </div>
      </div>


      <div className="my-20">

    <Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $purple600 -20%, $pink600 100%",
      }}
      weight="bold"
    >
Шинэковын
    </Text>
    <Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $blue600 -20%, $pink600 50%",
      }}
      weight="bold"
    >
      Portfolio
    </Text>
</div>


 <Button className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" onPress={() => setVisible(true)}>
        Танилцах
        {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            
          </p>
      </Button>
      <Modal
        scroll
        width="450px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
          Миний тухай
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
          <PerCard />
           
           Сайн байна уу? Шинэхэн төгсөгч Наранмандах байна. Frontend чиглэлээр дагнах сонирхолтой байгаа ба түүнийгээ дагаад HTML, CSS, Reactjs гэх технологиуд дээр ажиллаж сурж байгаа. Мөн ажил хайж байгаа шүү :)
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
          <Button auto onPress={() => setVisible(false)}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        
        <a
          href="https://github.com/gracexnn"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"

        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Github{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            
          </p>
        </a>

        <a
          href="https://fb.com/gracexnn"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"

        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Facebook{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            
          </p>
        </a>

        <a
          href="https://instagram.com/gracexnn"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Instagram{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            IG бол public шүү :))
          </p>
        </a>
      



       
      <a
          href="/gracexnn-cv.pdf"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Download CV{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
Өөрийн тухай мэдээллийг агуулсан CV татах
          </p>
        </a>
      </div>
      
     
    </main>
  )
}
