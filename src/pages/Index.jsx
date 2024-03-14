import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Flex, Image, Link, useToast } from "@chakra-ui/react";
import { FaRobot, FaBrain, FaRocket, FaGithub } from "react-icons/fa";

const TOOLS = [
  {
    name: "AI Chatbots",
    description: "Engage with users and provide instant support with AI-powered chatbots.",
    icon: FaRobot,
  },
  {
    name: "AI Writing Assistant",
    description: "Generate high-quality content effortlessly with AI writing tools.",
    icon: FaBrain,
  },
  {
    name: "AI Code Assistant",
    description: "Boost your productivity with AI-powered code completion and suggestions.",
    icon: FaRocket,
  },
];

const Index = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission
    console.log("Submitted email:", email);
    setEmail("");
    toast({
      title: "Subscribed!",
      description: "You have successfully subscribed to our newsletter.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" py={4} px={8} bg="gray.100">
        <Heading as="h1" size="xl">
          FutureTools
        </Heading>
        <Link href="https://github.com/yourusername/futuretools" isExternal>
          <FaGithub size={28} />
        </Link>
      </Flex>

      {/* Hero section */}
      <Box py={20} px={8} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>
          Empower Your Workflow with AI
        </Heading>
        <Text fontSize="xl" mb={8}>
          Discover a collection of AI-powered tools to enhance your productivity and creativity.
        </Text>
        <Image src="https://images.unsplash.com/photo-1632679090212-612ac1f4d76f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwaWxsdXN0cmF0aW9ufGVufDB8fHx8MTcxMDQ1MDE5Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Illustration" maxW="500px" mx="auto" mb={8} />
      </Box>

      {/* Tools section */}
      <Box py={20} px={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Explore Our Tools
        </Heading>
        <Flex wrap="wrap" justify="center" gap={8}>
          {TOOLS.map((tool, index) => (
            <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="md" maxW="300px" textAlign="center">
              <tool.icon size={48} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                {tool.name}
              </Heading>
              <Text>{tool.description}</Text>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Newsletter section */}
      <Box py={20} px={8} bg="gray.100" textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Stay Updated
        </Heading>
        <Text fontSize="xl" mb={8}>
          Subscribe to our newsletter to receive the latest news and updates.
        </Text>
        <form onSubmit={handleSubmit}>
          <Flex justify="center" mb={4}>
            <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} mr={4} maxW="300px" />
            <Button type="submit" colorScheme="blue">
              Subscribe
            </Button>
          </Flex>
        </form>
      </Box>

      {/* Footer */}
      <Box as="footer" py={4} px={8} bg="gray.200" textAlign="center">
        <Text>&copy; {new Date().getFullYear()} FutureTools. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
