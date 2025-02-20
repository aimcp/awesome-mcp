# awesome-mcp

## Mcp Servers

### official

- [AWS KB Retrieval](https://github.com/modelcontextprotocol/servers/tree/main/src/aws-kb-retrieval-server) - An MCP server implementation for retrieving information from the AWS Knowledge Base using the Bedrock Agent Runtime.
- [Brave Search](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) - An MCP server implementation that integrates the Brave Search API, providing both web and local search capabilities.
- [EverArt](https://github.com/modelcontextprotocol/servers/tree/main/src/everart) - Image generation server using EverArt's API.
- [Fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) - A Model Context Protocol server that provides web content fetching capabilities. This server enables LLMs to retrieve and process content from web pages, converting HTML to markdown for easier consumption.
- [Filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) - Node.js server implementing Model Context Protocol (MCP) for filesystem operations.
- [Google Drive](https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive) - This MCP server integrates with Google Drive to allow listing, reading, and searching over files.
- [Git](https://github.com/modelcontextprotocol/servers/tree/main/src/git) - A Model Context Protocol server for Git repository interaction and automation. This server provides tools to read, search, and manipulate Git repositories via Large Language Models.
- [GitHub](https://github.com/modelcontextprotocol/servers/tree/main/src/github) - MCP Server for the GitHub API, enabling file operations, repository management, search functionality, and more.
- [GitLab](https://github.com/modelcontextprotocol/servers/tree/main/src/gitlab) - MCP Server for the GitLab API, enabling project management, file operations, and more.
- [Google Maps](https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps) - MCP Server for the Google Maps API.
- [Knowledge Graph Memory](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) - A basic implementation of persistent memory using a local knowledge graph. This lets Claude remember information about the user across chats.
- [PostgreSQL](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres) - A Model Context Protocol server that provides read-only access to PostgreSQL databases. This server enables LLMs to inspect database schemas and execute read-only queries.
- [Puppeteer](https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer) - A Model Context Protocol server that provides browser automation capabilities using Puppeteer. This server enables LLMs to interact with web pages, take screenshots, and execute JavaScript in a real browser environment.
- [Redis](https://github.com/modelcontextprotocol/servers/tree/main/src/redis) - A Model Context Protocol server that provides access to Redis databases. This server enables LLMs to interact with Redis key-value stores through a set of standardized tools.
- [Sentry](https://github.com/modelcontextprotocol/servers/tree/main/src/sentry) - A Model Context Protocol server for retrieving and analyzing issues from Sentry.io. This server provides tools to inspect error reports, stacktraces, and other debugging information from your Sentry account.
- [Sequential Thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) - An MCP server implementation that provides a tool for dynamic and reflective problem-solving through a structured thinking process.
- [Slack](https://github.com/modelcontextprotocol/servers/tree/main/src/slack) - MCP Server for the Slack API, enabling Claude to interact with Slack workspaces.
- [SQLite](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite) - A Model Context Protocol (MCP) server implementation that provides database interaction and business intelligence capabilities through SQLite. This server enables running SQL queries, analyzing business data, and automatically generating business insight memos.
- [Time](https://github.com/modelcontextprotocol/servers/tree/main/src/time) - A Model Context Protocol server that provides time and timezone conversion capabilities. This server enables LLMs to get current time information and perform timezone conversions using IANA timezone names, with automatic system timezone detection.

### analysis

- [Sequential Thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) - An MCP server implementation that provides a tool for dynamic and reflective problem-solving through a structured thinking process.

### browser

- [Fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) - A Model Context Protocol server that provides web content fetching capabilities. This server enables LLMs to retrieve and process content from web pages, converting HTML to markdown for easier consumption.
- [Knowledge Graph Memory](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) - A basic implementation of persistent memory using a local knowledge graph. This lets Claude remember information about the user across chats.
- [Puppeteer](https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer) - A Model Context Protocol server that provides browser automation capabilities using Puppeteer. This server enables LLMs to interact with web pages, take screenshots, and execute JavaScript in a real browser environment.

### code

- [Git](https://github.com/modelcontextprotocol/servers/tree/main/src/git) - A Model Context Protocol server for Git repository interaction and automation. This server provides tools to read, search, and manipulate Git repositories via Large Language Models.
- [GitHub](https://github.com/modelcontextprotocol/servers/tree/main/src/github) - MCP Server for the GitHub API, enabling file operations, repository management, search functionality, and more.
- [GitLab](https://github.com/modelcontextprotocol/servers/tree/main/src/gitlab) - MCP Server for the GitLab API, enabling project management, file operations, and more.

### databases

- [PostgreSQL](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres) - A Model Context Protocol server that provides read-only access to PostgreSQL databases. This server enables LLMs to inspect database schemas and execute read-only queries.
- [Redis](https://github.com/modelcontextprotocol/servers/tree/main/src/redis) - A Model Context Protocol server that provides access to Redis databases. This server enables LLMs to interact with Redis key-value stores through a set of standardized tools.
- [SQLite](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite) - A Model Context Protocol (MCP) server implementation that provides database interaction and business intelligence capabilities through SQLite. This server enables running SQL queries, analyzing business data, and automatically generating business insight memos.

### images

- [EverArt](https://github.com/modelcontextprotocol/servers/tree/main/src/everart) - Image generation server using EverArt's API.

### location & time

- [Google Maps](https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps) - MCP Server for the Google Maps API.
- [Time](https://github.com/modelcontextprotocol/servers/tree/main/src/time) - A Model Context Protocol server that provides time and timezone conversion capabilities. This server enables LLMs to get current time information and perform timezone conversions using IANA timezone names, with automatic system timezone detection.

### monitor

- [Sentry](https://github.com/modelcontextprotocol/servers/tree/main/src/sentry) - A Model Context Protocol server for retrieving and analyzing issues from Sentry.io. This server provides tools to inspect error reports, stacktraces, and other debugging information from your Sentry account.

### notification

- [Slack](https://github.com/modelcontextprotocol/servers/tree/main/src/slack) - MCP Server for the Slack API, enabling Claude to interact with Slack workspaces.

### search

- [AWS KB Retrieval](https://github.com/modelcontextprotocol/servers/tree/main/src/aws-kb-retrieval-server) - An MCP server implementation for retrieving information from the AWS Knowledge Base using the Bedrock Agent Runtime.
- [Brave Search](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) - An MCP server implementation that integrates the Brave Search API, providing both web and local search capabilities.
- [Google Drive](https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive) - This MCP server integrates with Google Drive to allow listing, reading, and searching over files.

### storage

- [Filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) - Node.js server implementing Model Context Protocol (MCP) for filesystem operations.
