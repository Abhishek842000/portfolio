export interface Publication {
  type: string;
  year: number;
  title: string;
  lead: string;
  description: string;
  publishedIn: string;
  publisher: string;
  authors: string[];
  externalUrl?: string;
}

export const publications: Publication[] = [
  {
    type: "Journal paper",
    year: 2021,
    title: "Automated Detection of Diabetic Retinopathy Using VGG-16 Architecture",
    lead: "A pretrained VGG-16 model grades diabetic retinopathy severity (0–4) on APTOS 2019 fundus photographs.",
    description:
      "The network was trained on 3,668 images and tested on 1,728 unseen images, reaching 74.58% accuracy with categorical cross-entropy and Adam. The output is a 0–4 severity label intended to assist early screening rather than replace a clinician.",
    publishedIn:
      "International Research Journal of Engineering and Technology (IRJET)",
    publisher: "IRJET",
    authors: ["Abhishek Deshpande", "Jatin Pardhi"],
    externalUrl: "https://www.irjet.net/archives/V8/i3/IRJET-V8I3564.pdf",
  },
  {
    type: "Conference paper",
    year: 2021,
    title: "Automated Determination of Critical Temperature",
    lead: "Linear regression, Lasso, and SVM models predict superconducting critical temperature from 77 material properties.",
    description:
      "The models were trained on 18,974 compounds. Linear and Lasso reached 84.61% accuracy, reported in the ICSADL 2021 Springer volume Advances in Intelligent Systems and Computing (vol. 1408, pp. 223–236).",
    publishedIn: "Sentimental Analysis and Deep Learning (ICSADL 2021)",
    publisher: "Springer",
    authors: ["Abhishek Deshpande", "Jatin Pardhi", "Gokul Bisen"],
    externalUrl: "https://link.springer.com/chapter/10.1007/978-981-16-5157-1_19",
  },
];
