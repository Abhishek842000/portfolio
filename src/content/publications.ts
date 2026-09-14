export interface Publication {
  type: string;
  year: number;
  title: string;
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
    description:
      "A pretrained VGG-16 model grades diabetic retinopathy severity (0–4) on APTOS 2019 fundus photographs: trained on 3,668 images and tested on 1,728 unseen images, reaching 74.58% accuracy.",
    publishedIn: "International Research Journal of Engineering and Technology (IRJET), Vol. 8, Issue 3",
    publisher: "IRJET",
    authors: ["Abhishek Deshpande", "Jatin Pardhi"],
    externalUrl:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3Pmg6YgAAAAJ&citation_for_view=3Pmg6YgAAAAJ:u-x6o8ySG0sC",
  },
  {
    type: "Conference paper",
    year: 2021,
    title: "Automated Determination of Critical Temperature",
    description:
      "Multiple linear regression, Lasso, and SVM models trained on 77 physical and chemical properties of 18,974 compounds to predict superconducting critical temperature, with 84.61% accuracy on the linear and Lasso models.",
    publishedIn:
      "Sentimental Analysis and Deep Learning (ICSADL 2021), Advances in Intelligent Systems and Computing vol. 1408, pp. 223–236",
    publisher: "Springer",
    authors: ["Abhishek Deshpande", "Jatin Pardhi", "Gokul Bisen"],
    externalUrl: "https://link.springer.com/chapter/10.1007/978-981-16-5157-1_19",
  },
];
