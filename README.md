# Biaya

## Jadinya

```
┌─────────┬──────────────┐
│ (index) │ jumlah_biaya │
├─────────┼──────────────┤
│    0    │  '450.000'   │
└─────────┴──────────────┘
[
  {
    task: 'Membuat template Blogspot',
    estimasi_waktu: '2 hari',
    biaya: '300.000'
  },
  {
    task: 'Setting GSC dan Google Search Console',
    estimasi_waktu: '1 hari',
    biaya: '150.000'
  }
]
```

## Install

```bash
npm i -g biaya
```

## Menjalankan

```bash
biaya data.yml
```

## Contoh data.yml

```yaml
- task: Membuat template Blogspot
  hari: 2
- task: Setting GSC dan Google Search Console
  hari: 1
```
