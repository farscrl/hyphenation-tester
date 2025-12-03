# Hyphenation Tester

A web-based tool for testing and validating hyphenation patterns. This application helps developers and linguists fine-tune hyphenation rules and compare generated output with expected results.

## Features

- **Interactive Hyphenation Testing**: Test hyphenation patterns in real-time
- **Pattern Comparison**: Compare generated hyphenation with expected output to identify differences
- **Customizable Separation Sign**: Define custom characters for hyphenation marks
- **Pattern Editor**: Edit and manage hyphenation patterns directly in the application
- **Visual Highlighting**: Highlight separation signs for easy identification

## Try it Online

The application is deployed and available online at: **https://farscrl.github.io/hyphenation-tester/**

No installation required - simply open the link in your browser and start testing hyphenation patterns!

## Getting Started

### Prerequisites

- Node.js (v22 or higher)
- pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hyphen-tester
```

2. Install dependencies:
```bash
pnpm install
```

### Development Server

Run the development server:
```bash
pnpm run start
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you modify any source files.

## Building for Production

Build the application for production:
```bash
pnpm run build
```

The build artifacts will be stored in the `dist/hyphenation-tester/browser/` directory.

## Usage

### Tester Tab

1. **Original Text**: Paste the text you want to hyphenate in the first textarea
2. **Expected Output**: Enter the text with hyphenation marks (using the configured separation sign) in the second textarea
3. **Generate Hyphenation**: Click the button to generate hyphenation based on current rules
4. **Compare Results**: View the differences between generated and expected output:
   - **Green**: Added hyphenation marks
   - **Red**: Missing hyphenation marks
   - **Grey**: Unchanged text

### Rules Tab

1. **Hyphenation Patterns**: Edit the hyphenation patterns (one per line)
   - Patterns follow the Hunspell hyphenation format
2. **Separation Sign**: Customize the character used to mark hyphenation points (default: ‧)
3. **Highlight Signs**: Toggle visual highlighting of separation characters in the output

## Technologies Used

- **Angular 21**: Modern frontend framework
- **Tailwind CSS 4.x**: Utility-first CSS framework for responsive design
- **Hyphen Library**: Hyphenation engine for text processing
- **Diff Library**: Text comparison for visual output and validation

