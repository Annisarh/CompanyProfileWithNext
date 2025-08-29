import Image from "next/image";
import DataImage from "@/public/data";
import HeroInfo from "@/components/HeroInfo";
import Link from "next/link";
// React Server Components
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <>
      {/* title */}
      <motion.div
        className="py-20"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="sm:text-6xl/tight text-5xl/tight text-left sm:text-center">
          Tingkatkan Gaya Hidup Anda <br /> Bersama Kami
        </h1>
      </motion.div>
      {/* title */}

      {/* hero image */}
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Image src={DataImage.Hero} alt="Hero Image" priority />
        </motion.div>
        <HeroInfo />
      </div>
      {/* hero image */}

      {/* Layanan */}
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-32 gap-10"
        id="layanan"
      >
        <motion.div
          className="md:text-center shadow-2xl p-7 rounded-2xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <i className="ri-money-dollar-circle-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">
            Memberikan Harga Terbaik
          </p>
          <p className="text-base/loose">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            maxime aliquid minima eum, natus deserunt deleniti laborum autem
            rerum voluptatibus corrupti sit harum sunt voluptas explicabo
            molestias fugit, nobis quod?
          </p>
        </motion.div>
        <motion.div
          className="md:text-center shadow-2xl p-7 rounded-2xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <i className="ri-service-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">
            Pemeriksaan Secara Berkala
          </p>
          <p className="text-base/loose">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            maxime aliquid minima eum, natus deserunt deleniti laborum autem
            rerum voluptatibus corrupti sit harum sunt voluptas explicabo
            molestias fugit, nobis quod?
          </p>
        </motion.div>
        <motion.div
          className="md:text-center shadow-2xl p-7 rounded-2xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <i className="ri-star-s-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">
            Focus pada Website & Mobile
          </p>
          <p className="text-base/loose">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            maxime aliquid minima eum, natus deserunt deleniti laborum autem
            rerum voluptatibus corrupti sit harum sunt voluptas explicabo
            molestias fugit, nobis quod?
          </p>
        </motion.div>
      </div>
      {/* Layanan */}

      {/* proyeks */}
      <div className="mt-32" id="proyek">
        <motion.h1
          className="font-semibold text-4xl/normal text-center"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
        >
          Proyek Kami
        </motion.h1>
        <motion.p
          className="text-base/loose text-center"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          est iusto.
        </motion.p>

        <div className="mt-20 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <motion.div
            className="shadow-2xl p-4 rounded-2xl"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src={DataImage.Proyek5}
              alt="Proyek Image"
              priority
              className="rounded-tl-2xl rounded-tr-2xl"
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Proyek Pertama</h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              sit.
            </p>
            <div className="mt-6 mb-3 ">
              <Link
                href={"#"}
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Website
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="shadow-2xl p-4 rounded-2xl"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src={DataImage.Proyek1}
              alt="Proyek Image"
              priority
              className="rounded-tl-2xl rounded-tr-2xl"
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Proyek Kedua</h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              sit.
            </p>
            <div className="mt-6 mb-3">
              <Link
                href={"#"}
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Website
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="shadow-2xl p-4 rounded-2xl"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={DataImage.Proyek2}
              alt="Proyek Image"
              priority
              className="rounded-tl-2xl rounded-tr-2xl"
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Proyek Ketiga</h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              sit.
            </p>
            <div className="mt-6 mb-3 ">
              <Link
                href={"#"}
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Website
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="shadow-2xl p-4 rounded-2xl"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
          >
            <Image
              src={DataImage.Proyek3}
              alt="Proyek Image"
              priority
              className="rounded-tl-2xl rounded-tr-2xl"
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Proyek Keempat</h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              sit.
            </p>
            <div className="mt-6 mb-3 ">
              <Link
                href={"#"}
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Website
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="shadow-2xl p-4 rounded-2xl"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={DataImage.Proyek4}
              alt="Proyek Image"
              priority
              className="rounded-tl-2xl rounded-tr-2xl"
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Proyek Kelima</h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              sit.
            </p>
            <div className="mt-6 mb-3 ">
              <Link
                href={"#"}
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Website
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      {/* proyeks */}

      {/* contack */}
      <div
        className="mt-32 flex items-center justify-between md:flex-row flex-col md:gap-0 gap-2"
        id="kontak"
      >
        <h2 className="text-3xl font-bold">Ngoding.</h2>
        <div className="flex gap-10">
          <Link href={"#beranda"}>Beranda</Link>
          <Link href={"#layanan"}>Layanan</Link>
          <Link href={"#proyek"}>Proyek</Link>
        </div>
        <div className="flex gap-4">
          <Link href={"#"}>
            <i className="ri-youtube-fill ri-2x"></i>
          </Link>
          <Link href={"#"}>
            <i className="ri-instagram-fill ri-2x"></i>
          </Link>
          <Link href={"#"}>
            <i className="ri-reddit-fill ri-2x"></i>
          </Link>
          <Link href={"#"}>
            <i className="ri-twitter-fill ri-2x"></i>
          </Link>
        </div>
      </div>
      {/* contack */}
    </>
  );
}
