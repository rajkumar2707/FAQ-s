# React Native FAQ Library

The React Native FAQ Library is a mobile application that provides a user-friendly way to access frequently asked questions on various topics. This README file will guide you through the installation, usage, contribution, and licensing details of the project.

## Table of Contents\

- [Installation](#installation)
- [Usage](#Usage/Examples)
- [Options](#Options)

### Prerequisites

Before you begin, make sure you have React Native and its dependencies installed. You can follow the official [React Native Getting Started Guide](https://reactnative.dev/docs/environment-setup) if you need help with the setup.

### Installation

```bash
  npm install react-native-faq
```

```bash
  yarn add react-native-faq
```

### Usage/Examples

```javascript
import FAQ from 'react-native-faq';

function App() {
  return <FAQ data={[{question: '', answer: ''}]} />;
}
```

### Options

| Option              | Required | Description                                                                                                |
| ------------------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| data                | true     | this value for data of contain.                                                                            |
| title               | false    | screen heading (by default it is FAQ's)                                                                    |
| titleContainerStyle | false    | this style Effect to title (you can customize title according to your requirements)                        |
| titleStyle          | false    | this style Effect to title border (by default it's green you can customize according to your requirements) |
| titleBorderStyle    | false    | this style Effect to title border (by default it's green you can customize according to your requirements) |
