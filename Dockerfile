# 使用官方Node.js镜像作为基础镜像
FROM node:21

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json到工作目录
COPY package*.json ./

# 安装依赖
RUN npm i

# 复制项目文件到工作目录
COPY . .

# 构建Next.js应用
RUN npm run build

# 暴露应用端口(根据实际情况修改)
EXPOSE 3000

# 运行应用
CMD ["npm", "start"]