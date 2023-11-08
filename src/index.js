const Realm = require("realm");
const androidSchema = require("./android_realm_schema");
const fs = require("fs");

async function main() {
  if (process.argv.length != 4) {
    console.log("Usage: npm run start <realm-file> <output-dir>");
    console.log(
      "Output will be written to <output-dir>/MetricPpg.json, <output-dir>/StepsSummaryModel.json, etc."
    );
    return;
  }

  const outputDir = process.argv[3];
  // ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // open the realm file which we want to convert to JSON
  let realm = await Realm.open(realmConfig(process.argv[2]));

  // Go through all Objects in the realm file and convert them to JSON
  for (const name of Object.keys(androidSchema).map(
    (v) => androidSchema[v].name
  )) {
    console.log(name);
    await fs.promises.appendFile(
      `${outputDir}/${name}.json`,
      JSON.stringify(realm.objects(name))
    );
  }
}

const realmConfig = (path) => ({
  path: process.argv[2],
  schema: Object.keys(androidSchema).map((key) => androidSchema[key]),
  schemaVersion: 210,
});

main();
