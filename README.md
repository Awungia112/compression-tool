# 🚀 Compression Project

A multi-language compression utility that supports RLE and LZ77 algorithms, implemented in both Rust and JavaScript.

## 🛠️ Features

- 🔄 RLE (Run-Length Encoding) compression
- 📦 LZ77 compression algorithm
- 🌐 Dual implementation in Rust and JavaScript
- 🐳 Docker support for easy deployment
- 🤖 GitHub Actions for CI/CD

## 🚀 Quick Start

### Using Docker (Recommended)

```bash
# Place your input file in the project root
# Run compression using Docker Compose
docker-compose up
```

### Manual Setup

#### JavaScript Implementation
```bash
cd js-compressor
npm install
npm run compress input.txt output.rle rle
```

#### Rust Implementation
```bash
cd rust-compressor
cargo build --release
cargo run -- compress input.txt output.rle --algorithm rle
```

## 📝 Usage

### JavaScript
```bash
node index.js compress <input_file> <output_file> <algorithm>
# algorithm options: rle, lz77
```

### Rust
```bash
cargo run -- compress <input_file> <output_file> --algorithm <algorithm>
# algorithm options: rle, lz77
```

## 🧪 Testing

### JavaScript Tests
```bash
cd js-compressor
npm test
```

### Rust Tests
```bash
cd rust-compressor
cargo test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
