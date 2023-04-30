#!/usr/bin/env node

import yaml_to_json from "js-yaml";
import { readFileSync } from "fs";

const biaya_harian = 150000;

let data = process.argv[2];
let ambil_data = readFileSync(data).toString();ambil_data = ambil_data.replace(/\r/g, "")

let jadi_json = yaml_to_json.load(ambil_data);

let total = 0;
for (let x of jadi_json) {
  total += x.hari;
}
total *= biaya_harian;
console.table([
  {
    jumlah_biaya: total.toLocaleString("id"),
  },
]);

jadi_json = jadi_json.map((x) => ({
  task: x.task,
  estimasi_waktu: `${x.hari} hari`,
  biaya: (x.hari * biaya_harian).toLocaleString("id"),
}));
console.log(jadi_json);
