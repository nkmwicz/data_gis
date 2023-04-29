import data from "./eur16c.json";

const features = data.features;

const newFeatures = [];

features.forEach((item) => {
  const type = item.type;
  const properties = item.properties;
  const geometry = item.geometry;

  const newFeature = {
    type,
    properties: { ...properties, id: properties.name },
    geometry,
  };

  newFeatures.push(newFeature);
});

for (let i = 0; i < 5; i++) {
  console.log(newFeatures[i]);
}
