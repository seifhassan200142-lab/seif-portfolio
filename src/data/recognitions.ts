const baseUrl = import.meta.env.BASE_URL;

const asset = (path: string) => `${baseUrl}${path.replace(/^\/+/, "")}`;


export const recognitions = [
  {
    name: "MCIT",
    logo: asset("logos/mcit.png"),
    label: "Training at the Ministry of Communications and Information Technology (MCIT) in Egypt",
  },
  {
    name: "Egyptian Military Academy",
    logo: asset("logos/egyptian-military-academy.png"),
    label: "Training at the Egyptian Military Academy",
  },
  {
    name: "ZAB",
    logo: asset("logos/zab.png"),
    label: "German degree recognition",
  },
  {
    name: "Microsoft Azure",
    logo: asset("logos/microsoft-azure.png"),
    label: "Azure AI Fundamentals",
  },
  {
    name: "AWS",
    logo: asset("logos/aws.png"),
    label: "AWS AI learning",
  },
  {
    name: "ITC Egypt",
    logo: asset("logos/itc.png"),
    label: "Telecommunications conference",
  },
  {
    name: "IEEE",
    logo: asset("logos/ieee.png"),
    label: "IEEE publication / technical community",
  },
  {
  name: "WE",
  logo: asset("logos/we.png"),
  label: "Telecom company Training",
  },
  {
  name: "Digilians",
  logo: asset("logos/digi.png"),
  label: "Digital Pioneers Diploma",
  },

];