"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Factory,
  HardHat,
  Home,
  Menu,
  Ruler,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";

const WA_NUMBER = "5592993564052";
const WA = (message = "Olá, Alciellen! Gostaria de solicitar um orçamento.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

const assets = {
  logo: "/images/alciellen/alciellen-jr-concretos-logo.svg",
  portrait: "/images/alciellen/alciellen-consultora-comercial.png",
  vigotas: "/images/alciellen/vigotas-para-laje-jr-concretos.jpg",
  concreto: "/images/alciellen/concreto-usinado-jr-concretos-manaus-v2.jpg",
  concretoLajes:
    "/images/alciellen/concreto-usinado-para-lajes-jr-concretos-manaus.jpg",
  bomba: "/images/alciellen/bombeamento-concreto-caminhao-betoneira.jpg",
  piso: "/images/alciellen/piso-polido-industrial-v3.jpg",
  pisoDiscado: "/images/alciellen/piso-discado-aplicacao-v2.jpg",
  engenheiros: "/images/alciellen/engenheiros-obra-banner.jpg",
};

const navItems = [
  { href: "#produtos", label: "Produtos" },
  { href: "#processo", label: "Processo" },
  { href: "#obras", label: "Obras" },
  { href: "#faq", label: "FAQ" },
];

const products = [
  {
    title: "Concreto usinado",
    description:
      "Para lajes, pisos e obras que precisam de fornecimento programado, qualidade e previsibilidade.",
    image: assets.concreto,
    imageWidth: 738,
    imageHeight: 424,
    icon: Truck,
  },
  {
    title: "Vigotas para laje",
    description:
      "Opção indicada para quem busca resistência, segurança e melhor custo-benefício estrutural.",
    image: assets.vigotas,
    imageWidth: 737,
    imageHeight: 979,
    imageLayout: "portrait",
    icon: Ruler,
  },
  {
    title: "Bombeamento de concreto",
    description:
      "Apoio para obras que exigem alcance, produtividade e organização no lançamento do concreto.",
    image: assets.bomba,
    imageWidth: 597,
    imageHeight: 425,
    icon: Factory,
  },
  {
    title: "Piso polido",
    description:
      "Acabamento de alta durabilidade e estética refinada para pisos comerciais, residenciais e industriais.",
    image: assets.piso,
    imageWidth: 720,
    imageHeight: 1280,
    imageLayout: "portrait-tall",
    icon: Ruler,
  },
  {
    title: "Piso discado",
    description:
      "Serviço especializado em piso discado com qualidade, resistência e entrega programada para sua obra.",
    image: assets.pisoDiscado,
    imageWidth: 1536,
    imageHeight: 1024,
    fallbackImage: assets.piso,
    icon: ShieldCheck,
  },
];

const audiences = [
  ["Engenheiros", HardHat],
  ["Arquitetos", Ruler],
  ["Mestres de obras", ShieldCheck],
  ["Construtoras", Building2],
  ["Empresários", Factory],
  ["Obras residenciais", Home],
  ["Obras comerciais", Building2],
  ["Obras industriais", Factory],
];

const faqs = [
  {
    q: "Como solicitar orçamento?",
    a: "Envie uma mensagem pelo WhatsApp informando o produto desejado, endereço da obra, volume aproximado e, se tiver, medidas ou projeto.",
  },
  {
    q: "Vocês atendem Manaus?",
    a: "Sim. O atendimento é direcionado para Manaus - AM, com base na operação da J&R Concretos.",
  },
  {
    q: "Trabalham com bombeamento?",
    a: "Sim. O bombeamento está entre os serviços destacados e pode ser orientado conforme volume, acesso e etapa da obra.",
  },
  {
    q: "Como calcular concreto?",
    a: "A estimativa inicial considera área, espessura e tipo de aplicação. Alciellen pode orientar os dados necessários para o orçamento.",
  },
  {
    q: "Atendem grandes obras?",
    a: "Sim. A comunicação contempla construtoras, engenheiros, empresas, distritos industriais e obras comerciais ou industriais.",
  },
];

const css = `
  html{scroll-behavior:smooth;scroll-padding-top:96px}
  *,*::before,*::after{box-sizing:border-box}
  body{margin:0}
  .alc{min-height:100vh;overflow-x:clip;background:#f4f1eb;color:#17191c;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
  .alc img{display:block;max-width:100%}
  .alc a{color:inherit;text-decoration:none}
  .alc button{font:inherit}
  .alc-skip{position:fixed;z-index:2000;top:8px;left:8px;padding:12px 16px;border-radius:6px;background:#17191c;color:#fff;font:800 12px/1.2 Inter,system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;transform:translateY(-160%);transition:transform .18s ease}
  .alc-skip:focus{transform:translateY(0)}
  .alc a:focus-visible,.alc button:focus-visible,.alc-footer a:focus-visible,.alc-skip:focus-visible{outline:3px solid #d6a12b;outline-offset:3px}
  .alc-wrap{width:min(1160px,calc(100% - 40px));margin:0 auto}
  .alc-section{padding:88px 0}
  .alc-eyebrow{display:flex;align-items:center;gap:10px;margin:0 0 14px;color:#a93728;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
  .alc-eyebrow::before{content:"";width:26px;height:2px;background:#d6a12b}
  .alc-h2{margin:0;max-width:780px;color:#17191c;font-size:clamp(28px,4.4vw,50px);font-weight:760;letter-spacing:0;line-height:1.06}
  .alc-lead{max-width:680px;margin:18px 0 0;color:#666a70;font-size:16px;line-height:1.76}
  .alc-btn{min-height:48px;padding:0 18px;display:inline-flex;align-items:center;justify-content:center;gap:9px;border-radius:6px;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;transition:transform .18s ease,box-shadow .18s ease,background .18s ease,border-color .18s ease}
  .alc-btn:hover{transform:translateY(-1px)}
  .alc-btn-primary{background:#d6a12b;color:#111;box-shadow:0 14px 30px rgba(214,161,43,.22)}
  .alc-btn-dark{background:#1b1f24;color:#fff}
  .alc-btn-outline{border:1px solid rgba(27,31,36,.18);background:rgba(255,255,255,.58);color:#1b1f24}
  .alc-btn-white{border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.08);color:#fff}

  .alc-nav{position:fixed;inset:0 0 auto;z-index:1001;height:68px;background:rgba(244,241,235,.9);border-bottom:1px solid rgba(23,25,28,.08);backdrop-filter:blur(14px)}
  .alc-nav-inner{height:100%;display:flex;align-items:center;justify-content:space-between;gap:20px}
  .alc-brand{display:flex;align-items:center;gap:12px;text-decoration:none}
  .alc-brand-mark{width:38px;height:38px;border-radius:4px;display:block;object-fit:contain}
  .alc-brand strong{display:block;color:#17191c;font-size:17px;line-height:1;font-weight:850}
  .alc-brand span{display:block;margin-top:4px;color:#656a70;font-size:10px;font-weight:800;letter-spacing:.13em;text-transform:uppercase}
  .alc-nav-links{display:none;align-items:center;gap:22px}
  .alc-nav-links a{color:#4f5459;font-size:11px;font-weight:800;letter-spacing:.11em;text-transform:uppercase;text-decoration:none}
  .alc-nav-links a:hover{color:#a93728}
  .alc-menu{width:42px;height:42px;display:grid;place-items:center;border:1px solid rgba(23,25,28,.14);border-radius:6px;background:#fff;color:#17191c}
  .alc-mobile{position:fixed;z-index:1000;top:68px;left:0;right:0;padding:12px 20px 18px;background:#f4f1eb;border-bottom:1px solid rgba(23,25,28,.1);box-shadow:0 22px 44px rgba(0,0,0,.12)}
  .alc-mobile a{display:block;padding:14px 0;border-bottom:1px solid rgba(23,25,28,.08);color:#17191c;font-size:12px;font-weight:850;letter-spacing:.1em;text-transform:uppercase;text-decoration:none}
  .alc-mobile a:last-child{margin-top:10px;padding:14px 16px;border-bottom:0;border-radius:6px;background:#d6a12b;color:#111;text-align:center;display:flex;align-items:center;justify-content:center;gap:8px}

  .alc-hero{position:relative;padding-top:68px;background:#f4f1eb}
  .alc-hero-inner{display:grid;gap:34px;align-items:stretch;min-height:calc(100svh - 68px);padding:34px 0 48px}
  .alc-hero-copy{display:flex;flex-direction:column;justify-content:center;padding:22px 0}
  .alc-hero h1{max-width:820px;margin:0;color:#17191c;font-size:clamp(38px,6vw,72px);font-weight:760;letter-spacing:0;line-height:.98;text-wrap:balance}
  .alc-hero-sub{max-width:690px;margin:22px 0 0;color:#555b62;font-size:17px;line-height:1.78}
  .alc-hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
  .alc-proof-row{display:grid;grid-template-columns:1fr;gap:10px;margin-top:34px;max-width:760px}
  .alc-proof{padding:14px 16px;border-left:3px solid #d6a12b;background:#fff;box-shadow:0 12px 30px rgba(34,33,28,.06)}
  .alc-proof strong{display:block;color:#17191c;font-size:13px;font-weight:850}
  .alc-proof span{display:block;margin-top:5px;color:#666b70;font-size:12px;line-height:1.45}
  .alc-visual{position:relative;min-height:530px;border-radius:10px;overflow:hidden;background:#191d22;box-shadow:0 28px 80px rgba(27,31,36,.18)}
  .alc-visual-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
  .alc-visual::after{content:"";position:absolute;z-index:0;inset:0;background:linear-gradient(180deg,rgba(10,12,15,.12),rgba(10,12,15,.64));pointer-events:none}
  .alc-portrait-card{position:absolute;z-index:1;right:22px;bottom:22px;width:min(260px,calc(100% - 44px));padding:10px;background:rgba(244,241,235,.95);border-radius:8px;box-shadow:0 20px 50px rgba(0,0,0,.26)}
  .alc-portrait-card img{width:100%;height:300px;object-fit:cover;object-position:50% 25%;border-radius:6px}
  .alc-portrait-meta{padding:13px 4px 2px}
  .alc-portrait-meta strong{display:block;color:#17191c;font-size:18px;font-weight:850}
  .alc-portrait-meta span{display:block;margin-top:4px;color:#a93728;font-size:11px;font-weight:850;letter-spacing:.12em;text-transform:uppercase}
  .alc-visual-label{position:absolute;z-index:1;left:22px;top:22px;max-width:290px;padding:16px;background:rgba(17,19,21,.94);border:1px solid rgba(255,255,255,.24);border-radius:8px;color:#fff;backdrop-filter:blur(10px)}
  .alc-visual-label strong{display:block;font-size:13px;font-weight:850;letter-spacing:.1em;text-transform:uppercase}
  .alc-visual-label span{display:block;margin-top:8px;color:#e1e3e5;font-size:13px;line-height:1.55}

  .alc-metrics{border-block:1px solid rgba(23,25,28,.08);background:#fff}
  .alc-metrics-grid{display:grid;grid-template-columns:1fr;gap:0}
  .alc-metric{padding:24px 0;border-bottom:1px solid rgba(23,25,28,.08)}
  .alc-metric strong{display:block;color:#17191c;font-size:28px;font-weight:800}
  .alc-metric span{display:block;margin-top:4px;color:#666b70;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}

  .alc-about-grid{display:grid;gap:34px;align-items:start}
  .alc-about-text{padding:30px;background:#1b1f24;color:#fff;border-radius:10px}
  .alc-about-text p{margin:0;color:#d5d7d9;font-size:16px;line-height:1.82}
  .alc-about-text p+p{margin-top:18px}
  .alc-checks{display:grid;gap:10px;margin-top:24px}
  .alc-checks span{display:flex;gap:10px;align-items:flex-start;color:#fff;font-size:13px;font-weight:720;line-height:1.45}
  .alc-checks svg{margin-top:1px;color:#d6a12b;flex:none}
  .alc-about-img{width:min(100%,280px);justify-self:center;border-radius:10px;overflow:hidden;background:#d8d1c4;box-shadow:0 18px 50px rgba(27,31,36,.12)}
  .alc-about-img img{display:block;width:100%;aspect-ratio:4/5;object-fit:cover;object-position:50% 38%;background:#d8d1c4}

  .alc-products{background:#17191c;color:#fff}
  .alc-products .alc-eyebrow{color:#d6a12b}
  .alc-products .alc-h2{color:#fff}
  .alc-products .alc-lead{color:#c9cccf}
  .alc-products-banner{position:relative;margin-top:40px;margin-bottom:40px;border-radius:10px;overflow:hidden;height:320px}
  .alc-products-banner img{width:100%;height:100%;object-fit:cover;object-position:center 40%}
  .alc-products-banner::after{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(10,12,15,.72) 0%,rgba(10,12,15,.28) 100%)}
  .alc-products-banner-label{position:absolute;z-index:1;left:28px;bottom:28px;max-width:420px}
  .alc-products-banner-label strong{display:block;color:#fff;font-size:22px;font-weight:780;line-height:1.18}
  .alc-products-banner-label span{display:block;margin-top:8px;color:#d6a12b;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
  .alc-product-grid{display:grid;grid-template-columns:1fr;gap:18px;margin-top:0}
  .alc-product{position:relative;isolation:isolate;display:flex;flex-direction:column;background:#f4f1eb;color:#17191c;border-radius:10px;overflow:hidden}
  .alc-product-img{position:relative;z-index:0;flex:none;height:270px;overflow:hidden;background:#222}
  .alc-product-img img{display:block;width:100%;height:100%;object-fit:cover}
  .alc-product-img--portrait img{object-position:center 45%}
  .alc-product-img--portrait-tall img{object-position:center 68%}
  .alc-product-body{position:relative;z-index:1;flex:1;padding:24px;background:#f4f1eb}
  .alc-product-icon{width:42px;height:42px;margin-bottom:20px;display:grid;place-items:center;border-radius:6px;background:#17191c;color:#d6a12b}
  .alc-product h3{margin:0;color:#17191c;font-size:23px;font-weight:780;letter-spacing:0;line-height:1.12}
  .alc-product p{margin:12px 0 0;color:#63676c;font-size:15px;line-height:1.68}
  .alc-product a{display:inline-flex;align-items:center;gap:8px;margin-top:22px;color:#a93728;font-size:12px;font-weight:850;letter-spacing:.08em;text-transform:uppercase}

  .alc-audience-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:36px}
  .alc-audience{min-height:116px;padding:18px;display:flex;flex-direction:column;justify-content:space-between;border:1px solid rgba(23,25,28,.08);border-radius:8px;background:#fff;box-shadow:0 12px 30px rgba(34,33,28,.05)}
  .alc-audience svg{color:#a93728}
  .alc-audience strong{color:#262a2e;font-size:14px;font-weight:780;line-height:1.25}

  .alc-process{background:#e8e3d7}
  .alc-steps{display:grid;gap:14px;margin-top:38px}
  .alc-step{display:grid;grid-template-columns:auto 1fr;gap:18px;padding:22px;background:#fff;border-radius:10px;box-shadow:0 12px 34px rgba(34,33,28,.05)}
  .alc-step-num{width:44px;height:44px;display:grid;place-items:center;border-radius:50%;background:#17191c;color:#d6a12b;font-size:12px;font-weight:850}
  .alc-step h3{margin:0;color:#17191c;font-size:21px;font-weight:760}
  .alc-step p{margin:7px 0 0;color:#666a70;font-size:15px;line-height:1.65}

  .alc-gallery{background:#17191c;color:#fff}
  .alc-gallery .alc-eyebrow{color:#d6a12b}
  .alc-gallery .alc-h2{color:#fff}
  .alc-gallery .alc-lead{color:#c9cccf}
  .alc-gallery-grid{display:grid;grid-template-columns:1fr;gap:14px;margin-top:40px}
  .alc-shot{position:relative;margin:0;min-height:260px;overflow:hidden;border-radius:10px;background:#000}
  .alc-shot img{display:block;width:100%;height:100%;min-height:260px;object-fit:cover;transition:transform .45s ease}
  .alc-shot:hover img{transform:scale(1.035)}
  .alc-shot figcaption{position:absolute;left:14px;bottom:14px;padding:9px 11px;border:1px solid rgba(255,255,255,.18);border-radius:5px;background:rgba(17,19,21,.95);color:#fff;font-size:11px;font-weight:850;letter-spacing:.09em;text-transform:uppercase;backdrop-filter:blur(8px)}

  .alc-diff-grid{display:grid;grid-template-columns:1fr;gap:12px;margin-top:34px}
  .alc-diff{display:flex;gap:12px;align-items:flex-start;padding:18px;background:#fff;border-radius:8px;border:1px solid rgba(23,25,28,.08)}
  .alc-diff svg{color:#a93728;flex:none}
  .alc-diff strong{display:block;color:#17191c;font-size:14px;font-weight:780}
  .alc-diff span{display:block;margin-top:4px;color:#666b70;font-size:13px;line-height:1.52}

  .alc-faq-grid{display:grid;gap:12px;margin-top:34px}
  .alc-faq{background:#fff;border:1px solid rgba(23,25,28,.08);border-radius:8px;overflow:hidden}
  .alc-faq button{width:100%;padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;border:0;background:transparent;color:#17191c;text-align:left;font-weight:780;cursor:pointer}
  .alc-faq button svg{flex:none;transition:transform .2s ease}
  .alc-faq.open button svg{transform:rotate(180deg)}
  .alc-faq p{margin:0;padding:0 20px 20px;color:#666a70;line-height:1.65}

  .alc-location{background:#fff}
  .alc-location-grid{display:grid;gap:28px;align-items:center}
  .alc-location-card{padding:26px;border-radius:10px;background:#17191c;color:#fff}
  .alc-location-card strong{display:block;font-size:20px;font-weight:780}
  .alc-location-card p{margin:12px 0 0;color:#d5d7d9;line-height:1.7}
  .alc-location-card a{margin-top:20px}
  .alc-map{min-height:360px;border:0;border-radius:10px;overflow:hidden;box-shadow:0 18px 50px rgba(27,31,36,.12);background:#e8e3d7}
  .alc-map iframe{display:block;width:100%;height:100%;min-height:360px;border:0}

  .alc-final{position:relative;padding:86px 0;background:#a93728;color:#fff;overflow:hidden}
  .alc-final::before{content:"";position:absolute;inset:0;background:url("${assets.bomba}") center/cover no-repeat;opacity:.13}
  .alc-final-inner{position:relative;display:grid;gap:28px;align-items:center}
  .alc-final h2{max-width:680px;margin:0;font-size:clamp(30px,4.8vw,54px);font-weight:760;line-height:1.06}
  .alc-final p{max-width:640px;margin:16px 0 0;color:#f1e6e3;font-size:16px;line-height:1.75}
  .alc-footer{padding:56px 0 0;background:#101214;color:#c4c7ca;font-size:14px}
  .alc-footer-brand{padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.07);margin-bottom:40px}
  .alc-footer-brand strong{display:block;color:#fff;font-size:20px;font-weight:850;letter-spacing:0;line-height:1}
  .alc-footer-brand span{display:block;margin-top:8px;color:#b8bbbe;font-size:13px;line-height:1.5}
  .alc-footer-grid{display:grid;gap:32px}
  .alc-footer-col strong{display:block;color:#fff;font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;margin-bottom:14px}
  .alc-footer-col p{margin:0;line-height:1.7}
  .alc-footer-col a{display:flex;align-items:center;gap:9px;color:#c4c7ca;text-decoration:none;line-height:1.6;transition:color .15s}
  .alc-footer-col a:hover{color:#d6a12b}
  .alc-footer-col a+a{margin-top:8px}
  .alc-footer-bottom{margin-top:40px;padding:18px 0;border-top:1px solid rgba(255,255,255,.18);display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:11px;color:#9fa3a7}
  .alc-footer-bottom a{color:#c4c7ca;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px;transition:color .15s}
  .alc-footer-bottom a:hover{color:#d6a12b}
  .alc-wa{position:fixed;right:18px;bottom:18px;z-index:950;width:56px;height:56px;display:grid;place-items:center;border:2px solid #fff;border-radius:50%;background:#08783d;color:#fff;box-shadow:0 12px 34px rgba(8,120,61,.34);animation:alc-wa-pulse 2.2s ease-out infinite;transition:transform .18s ease}
  .alc-wa:hover{transform:translateY(-2px) scale(1.04);animation-play-state:paused}
  @keyframes alc-wa-pulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,.58),0 12px 34px rgba(37,211,102,.32)}68%{box-shadow:0 0 0 18px rgba(37,211,102,0),0 12px 34px rgba(37,211,102,.32)}100%{box-shadow:0 0 0 0 rgba(37,211,102,0),0 12px 34px rgba(37,211,102,.32)}}

  @media(min-width:680px){
    .alc-proof-row{grid-template-columns:repeat(3,1fr)}
    .alc-metrics-grid{grid-template-columns:repeat(4,1fr)}
    .alc-metric{border-bottom:0;border-right:1px solid rgba(23,25,28,.08)}
    .alc-product-grid{grid-template-columns:repeat(2,1fr)}
    .alc-audience-grid{grid-template-columns:repeat(4,1fr)}
    .alc-diff-grid{grid-template-columns:repeat(3,1fr)}
    .alc-footer-grid{grid-template-columns:1.4fr 1fr 1fr}
  }
  @media(min-width:980px){
    .alc-nav-links{display:flex}
    .alc-menu{display:none}
    .alc-hero-inner{grid-template-columns:minmax(0,1fr) 626px}
    .alc-about-grid{grid-template-columns:1.05fr .95fr}
    .alc-about-img{width:340px;height:500px;justify-self:center}
    .alc-about-img img{width:100%;height:100%;aspect-ratio:auto;object-fit:cover;object-position:50% 30%}
    .alc-gallery-grid{grid-template-columns:1.1fr .9fr .9fr}
    .alc-shot:first-child{grid-row:span 2;min-height:536px}
    .alc-shot:first-child img{min-height:536px}
    .alc-location-grid{grid-template-columns:.82fr 1.18fr}
    .alc-final-inner{grid-template-columns:1fr auto}
  }
  @media(min-width:680px) and (max-width:979px){
    .alc-hero h1{max-width:760px;font-size:clamp(44px,8vw,68px);line-height:1.04}
    .alc-hero-sub{max-width:680px;font-size:19px;line-height:1.62}
  }
  @media(max-width:679px){
    .alc-wrap{width:min(100% - 32px,1160px)}
    .alc-mobile{top:68px}
    .alc-hero{padding-top:68px}
    .alc-hero-inner{min-height:auto;padding-top:28px}
    .alc-hero h1{font-size:clamp(36px,10.4vw,48px);line-height:1.06}
    .alc-hero-sub{margin-top:22px;font-size:16px;line-height:1.66}
    .alc-hero-actions .alc-btn{width:100%}
    .alc-visual{min-height:0;padding:16px;display:flex;flex-direction:column;gap:14px}
    .alc-visual::after{display:none}
    .alc-visual-bg{position:relative;inset:auto;width:100%;height:auto;object-fit:contain;border-radius:7px}
    .alc-visual-label{position:relative;inset:auto;max-width:none;order:-1}
    .alc-portrait-card{position:relative;inset:auto;width:min(100%,300px);align-self:center;transform:none}
    .alc-portrait-card img{height:340px;aspect-ratio:auto;object-fit:cover;object-position:50% 24%}
    .alc-about-img img{height:340px;aspect-ratio:auto;object-position:50% 27%}
    .alc-product-img,
    .alc-product-img--portrait-tall{height:280px;aspect-ratio:auto;background:#222}
    .alc-product-img--portrait{height:auto;aspect-ratio:737/979;background:#222}
    .alc-product-img img{width:100%;height:100%;max-width:none;object-fit:cover}
    .alc-shot{height:300px;min-height:300px;background:#000}
    .alc-shot img{width:100%;height:100%;min-height:0;max-width:none;object-fit:cover}
    .alc-shot--portrait{height:auto;min-height:0;aspect-ratio:737/979}
    .alc-final::before{background-size:contain;background-repeat:no-repeat;background-position:center}
    .alc-metrics{padding:16px 0;background:#f4f1eb;border-block:0}
    .alc-metrics-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
    .alc-metric{padding:16px 14px;border:1px solid rgba(23,25,28,.08);border-radius:9px;background:#fff;box-shadow:0 10px 24px rgba(34,33,28,.045)}
    .alc-metric strong{font-size:24px;line-height:1}
    .alc-metric span{margin-top:7px;font-size:10px;line-height:1.35}
    .alc-section{padding:66px 0}
    .alc-h2{font-size:clamp(27px,8vw,36px)}
    .alc-audience-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
    .alc-audience{min-height:96px;padding:14px;border-radius:9px;background:linear-gradient(180deg,#fff,#faf8f2);box-shadow:0 10px 24px rgba(34,33,28,.045)}
    .alc-audience svg{width:20px;height:20px}
    .alc-audience strong{font-size:12px;line-height:1.22}
  }
  @media(prefers-reduced-motion:reduce){
    html{scroll-behavior:auto}
    .alc *, .alc *::before, .alc *::after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
  }
`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="alc-nav" aria-label="Navegação principal">
        <div className="alc-wrap alc-nav-inner">
          <a className="alc-brand" href="#top" onClick={() => setOpen(false)}>
            <img className="alc-brand-mark" src={assets.logo} alt="Alciellen J&R Concretos" width="40" height="40" />
            <span>
              <strong>Alciellen</strong>
              <span>Consultora comercial</span>
            </span>
          </a>
          <div className="alc-nav-links">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <a className="alc-btn alc-btn-primary" href={WA()} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={15} /> Orçamento
            </a>
          </div>
          <button
            className="alc-menu"
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <nav className="alc-mobile" aria-label="Navegação mobile">
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={WA()} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            <WhatsAppIcon size={15} /> Solicitar orçamento
          </a>
        </nav>
      )}
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="alc-hero">
      <div className="alc-wrap alc-hero-inner">
        <div className="alc-hero-copy">
          <p className="alc-eyebrow">J&R Concretos em Manaus</p>
          <h1>Concreto usinado e soluções para sua obra.</h1>
          <p className="alc-hero-sub">
            Atendimento especializado para engenheiros, arquitetos, construtoras,
            empresários e clientes que buscam qualidade, segurança e agilidade
            para construir. Também atendemos piso polido e piso discado.
          </p>
          <div className="alc-hero-actions">
            <a className="alc-btn alc-btn-primary" href={WA("Olá, Alciellen! Quero solicitar um orçamento para minha obra.")} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={16} /> Pedir orçamento pelo WhatsApp
            </a>
            <a className="alc-btn alc-btn-outline" href="#produtos">
              Ver produtos <ArrowRight size={15} />
            </a>
          </div>
          <div className="alc-proof-row">
            <div className="alc-proof">
              <strong>Consultoria comercial</strong>
              <span>Orienta a escolha antes do pedido.</span>
            </div>
            <div className="alc-proof">
              <strong>Resposta direta</strong>
              <span>Contato rápido pelo WhatsApp.</span>
            </div>
            <div className="alc-proof">
              <strong>Obras em Manaus</strong>
              <span>Atendimento local pela J&R.</span>
            </div>
          </div>
        </div>
        <div className="alc-visual" aria-label="Concreto usinado J&R e consultora Alciellen">
          <Image
            className="alc-visual-bg"
            src={assets.concreto}
            alt=""
            aria-hidden="true"
            width={738}
            height={424}
            sizes="(min-width: 980px) 626px, (min-width: 680px) calc(100vw - 64px), calc(100vw - 64px)"
            priority
          />
          <div className="alc-visual-label">
            <strong>Do primeiro contato ao agendamento</strong>
            <span>Uma experiência comercial mais clara para comprar concreto, laje, vigotas e bombeamento.</span>
          </div>
          <div className="alc-portrait-card">
            <Image
              src={assets.portrait}
              alt="Alciellen, consultora comercial da J&R Concretos"
              width={1000}
              height={1500}
              sizes="(max-width: 679px) 280px, 260px"
              decoding="async"
            />
            <div className="alc-portrait-meta">
              <strong>Alciellen</strong>
              <span>Vendedora - J&R Concretos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="alc-metrics" aria-label="Resumo comercial">
      <div className="alc-wrap alc-metrics-grid">
        {[
          ["6", "soluções para obra"],
          ["Direto", "contato pelo WhatsApp"],
          ["Manaus", "atendimento local"],
          ["J&R", "concretos e serviços"],
        ].map(([value, label]) => (
          <div className="alc-metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="alc-section" id="sobre">
      <div className="alc-wrap alc-about-grid">
        <div>
          <p className="alc-eyebrow">Sobre a consultora</p>
          <h2 className="alc-h2">Atendimento pessoal com respaldo operacional da J&R Concretos.</h2>
          <p className="alc-lead">
            Esta página não vende apenas produto. Ela apresenta uma pessoa de
            referência para orientar o cliente, organizar informações e acelerar
            a chegada ao orçamento certo.
          </p>
          <div className="alc-about-text" style={{ marginTop: 28 }}>
            {/* TODO: substituir pela historia real da cliente. */}
            <p>
              Alciellen atua no atendimento comercial da J&R Concretos, apoiando
              clientes que precisam de concreto usinado, vigotas, bombeamento
              de concreto, piso polido e piso discado em Manaus.
            </p>
            <p>
              O foco é simplificar a compra: entender a demanda, orientar os
              dados necessários, enviar o orçamento e acompanhar o cliente até o
              agendamento.
            </p>
            <div className="alc-checks">
              <span><CheckCircle2 size={17} /> Atendimento para obras residenciais, comerciais e industriais.</span>
              <span><CheckCircle2 size={17} /> Comunicação direta para reduzir dúvidas e retrabalho.</span>
              <span><CheckCircle2 size={17} /> Apoio comercial para engenheiros, arquitetos e construtoras.</span>
            </div>
          </div>
        </div>
        <div className="alc-about-img">
          <Image
            src={assets.portrait}
            alt="Alciellen, consultora comercial"
            width={1000}
            height={1500}
            sizes="(min-width: 980px) 340px, (min-width: 680px) 280px, min(280px, calc(100vw - 32px))"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="produtos" className="alc-section alc-products">
      <div className="alc-wrap">
        <p className="alc-eyebrow">Produtos</p>
        <h2 className="alc-h2">Soluções para obra apresentadas com material real da cliente.</h2>
        <p className="alc-lead">
          A composição visual usa as imagens disponíveis da Alciellen/J&R, sem
          depender de imagens genéricas de banco.
        </p>
        <div className="alc-products-banner" aria-hidden="true">
          <Image
            src={assets.engenheiros}
            alt=""
            width={1920}
            height={1080}
            sizes="(min-width: 1160px) 1160px, 100vw"
            loading="lazy"
            decoding="async"
          />
          <div className="alc-products-banner-label">
            <span>J&R Concretos em Manaus</span>
            <strong>Soluções para obra com entrega programada e atendimento direto.</strong>
          </div>
        </div>
        <div className="alc-product-grid">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article className="alc-product" key={product.title}>
                <div
                  className={`alc-product-img${
                    "imageLayout" in product
                      ? product.imageLayout === "portrait-tall"
                        ? " alc-product-img--portrait-tall"
                        : " alc-product-img--portrait"
                      : ""
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={product.imageWidth}
                    height={product.imageHeight}
                    sizes="(min-width: 980px) 360px, (min-width: 680px) calc(50vw - 40px), calc(100vw - 32px)"
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      if ("fallbackImage" in product && product.fallbackImage) {
                        event.currentTarget.src = product.fallbackImage;
                      }
                    }}
                  />
                </div>
                <div className="alc-product-body">
                  <div className="alc-product-icon">
                    <Icon size={21} />
                  </div>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <a href={WA(`Olá, Alciellen! Quero orçamento para ${product.title}.`)} target="_blank" rel="noreferrer">
                    <WhatsAppIcon size={14} /> Consultar produto <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="alc-section">
      <div className="alc-wrap">
        <p className="alc-eyebrow">Quem atendo</p>
        <h2 className="alc-h2">Do cliente residencial aos projetos de maior porte.</h2>
        <p className="alc-lead">
          Uma rota clara para quem precisa comprar concreto e componentes de
          laje com menos fricção comercial.
        </p>
        <div className="alc-audience-grid">
          {audiences.map(([label, Icon]) => (
            <div className="alc-audience" key={label as string}>
              <Icon size={23} />
              <strong>{label as string}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Envie seu projeto", "Compartilhe medidas, local da obra, produto desejado e prazo esperado."],
    ["02", "Receba orientação especializada", "Alciellen confere os dados e orienta o caminho comercial mais adequado."],
    ["03", "Receba seu orçamento", "Você recebe as informações essenciais para decidir com segurança."],
    ["04", "Agende sua entrega", "Com o pedido alinhado, a próxima etapa é programar a entrega ou atendimento."],
  ];

  return (
    <section id="processo" className="alc-section alc-process">
      <div className="alc-wrap">
        <p className="alc-eyebrow">Como funciona</p>
        <h2 className="alc-h2">Um processo simples, direto e orientado para decisão.</h2>
        <div className="alc-steps">
          {steps.map(([num, title, text]) => (
            <article className="alc-step" key={num}>
              <span className="alc-step-num">{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    ["Atendimento personalizado", "Contato direto para entender contexto, urgencia e tipo de obra."],
    ["Resposta rápida", "Fluxo pensado para transformar dúvida em orçamento com agilidade."],
    ["Acompanhamento completo", "Suporte comercial desde a primeira mensagem até o agendamento."],
    ["Orientação comercial", "Apoio inicial sobre dados, aplicação e produto mais adequado."],
    ["Entrega programada", "Organização para reduzir improviso em etapas críticas da obra."],
    ["Estrutura operacional", "J&R como estrutura por trás do atendimento comercial."],
  ];

  return (
    <section className="alc-section">
      <div className="alc-wrap">
        <p className="alc-eyebrow">Diferenciais</p>
        <h2 className="alc-h2">Mais clareza para comprar e programar sua obra.</h2>
        {/* TODO: validar diferenciais reais. */}
        <div className="alc-diff-grid">
          {items.map(([title, text]) => (
            <div className="alc-diff" key={title}>
              <CheckCircle2 size={20} />
              <div>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const shots = [
    { src: assets.piso, label: "Piso polido", width: 720, height: 1280 },
    { src: assets.pisoDiscado, label: "Piso discado", width: 1536, height: 1024 },
    {
      src: assets.concretoLajes,
      label: "Concreto usinado para lajes",
      width: 1280,
      height: 722,
    },
    {
      src: assets.vigotas,
      label: "Vigotas para laje",
      width: 737,
      height: 979,
      imageLayout: "portrait",
    },
    { src: assets.bomba, label: "Bombeamento", width: 597, height: 425 },
  ];

  return (
    <section id="obras" className="alc-section alc-gallery">
      <div className="alc-wrap">
        <p className="alc-eyebrow">Obras e aplicações</p>
        <h2 className="alc-h2">Concreto e lajes em uso real.</h2>
        <p className="alc-lead">
          Veja registros de materiais, equipamentos e aplicações que mostram a
          estrutura da J&R Concretos no atendimento a diferentes tipos de obra.
        </p>
        <div className="alc-gallery-grid">
          {shots.map(({ src, label, width, height, ...shot }) => (
            <figure
              className={`alc-shot${
                "imageLayout" in shot && shot.imageLayout === "portrait"
                  ? " alc-shot--portrait"
                  : ""
              }`}
              key={src}
            >
              <Image
                src={src}
                alt={label}
                width={width}
                height={height}
                sizes="(min-width: 980px) 360px, calc(100vw - 32px)"
                loading="lazy"
                decoding="async"
              />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="alc-section">
      <div className="alc-wrap">
        <p className="alc-eyebrow">FAQ</p>
        <h2 className="alc-h2">Perguntas frequentes antes do orçamento.</h2>
        <div className="alc-faq-grid">
          {faqs.map((faq, index) => {
            const active = open === index;
            return (
              <div className={`alc-faq${active ? " open" : ""}`} key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(active ? -1 : index)}
                  aria-expanded={active}
                  aria-controls={`faq-answer-${index}`}
                >
                  {faq.q}
                  <ChevronDown size={18} />
                </button>
                {active && <p id={`faq-answer-${index}`}>{faq.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Location() {
  const mapsQuery = "Av. Elias Ramiro Bentes, 918B, Manaus AM, 69018-567";

  return (
    <section className="alc-section alc-location" aria-label="Localização">
      <div className="alc-wrap alc-location-grid">
        <div>
          <p className="alc-eyebrow">Localização</p>
          <h2 className="alc-h2">Base em Manaus para atender sua obra com mais previsibilidade.</h2>
          <p className="alc-lead">
            O endereço reforça a presença local da J&R Concretos e facilita a
            conversa sobre logística, entrega e atendimento.
          </p>
          <div className="alc-location-card" style={{ marginTop: 24 }}>
            <strong>J&R Concretos</strong>
            <p>
              Av. Elias Ramiro Bentes, 918B<br />
              Manaus - AM<br />
              CEP 69018-567
            </p>
            <a
              className="alc-btn alc-btn-primary"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`}
              target="_blank"
              rel="noreferrer"
            >
              Abrir no Google Maps <ArrowRight size={15} />
            </a>
          </div>
        </div>
        <div className="alc-map">
          <iframe
            title="Mapa da J&R Concretos em Manaus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`}
          />
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="alc-final">
      <div className="alc-wrap alc-final-inner">
        <div>
          <p className="alc-eyebrow" style={{ color: "#fff3cf" }}>Pronto para iniciar sua obra?</p>
          <h2>Solicite seu orçamento diretamente com Alciellen.</h2>
          <p>
            Receba atendimento rápido e personalizado para concreto usinado,
            vigotas, bombeamento, piso polido e piso discado em Manaus.
          </p>
        </div>
        <a className="alc-btn alc-btn-primary" href={WA("Olá, Alciellen! Quero solicitar meu orçamento pelo WhatsApp.")} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={16} /> Solicitar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="alc-footer">
      <div className="alc-wrap">
        <div className="alc-footer-brand">
          <img src={assets.logo} alt="J&R Concretos" width={52} height={52} style={{ borderRadius: 6, marginBottom: 16 }} />
          <strong>Alciellen — J&R Concretos</strong>
          <span>Concreto usinado, vigotas, bombeamento, piso polido e piso discado em Manaus - AM.</span>
        </div>
        <div className="alc-footer-grid">
          <div className="alc-footer-col">
            <strong>Contato</strong>
            <a href={WA()} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={14} /> (92) 99356-4052
            </a>
            <a href="https://wa.me/5592992537721" target="_blank" rel="noreferrer">
              <WhatsAppIcon size={14} /> (92) 99253-7721
            </a>
          </div>
          <div className="alc-footer-col">
            <strong>Endereço</strong>
            <p>Av. Elias Ramiro Bentes, 918B<br />Manaus - AM<br />CEP 69018-567</p>
          </div>
          <div className="alc-footer-col">
            <strong>Atendimento</strong>
            <p>Solicite seu orçamento diretamente pelo WhatsApp com Alciellen.</p>
          </div>
        </div>
        <div className="alc-footer-bottom">
          <span>© {new Date().getFullYear()} J&R Concretos. Todos os direitos reservados.</span>
          <span>Desenvolvido por <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">lumasites.com.br</a></span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function AlciellenPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <a className="alc-skip" href="#conteudo-principal">Pular para o conteúdo</a>
      <Navbar />
      <main className="alc" id="conteudo-principal">
        <Hero />
        <Metrics />
        <About />
        <Products />
        <Audience />
        <Process />
        <Differentials />
        <Gallery />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <a className="alc-wa" href={WA()} target="_blank" rel="noreferrer" aria-label="Falar com Alciellen no WhatsApp">
        <WhatsAppIcon size={29} />
      </a>
    </>
  );
}
